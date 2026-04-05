'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ruRU } from '@mui/x-date-pickers/locales';
import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import type { FC } from 'react';
import styles from './Form.module.scss';
import { Button, MaskInput } from '@/shared';
import { useFetchRecordMutation, type RecordSliceState } from '@/store/recordSlice/recordSlice';
import { getNextSundayDate } from '@/utils/getNextSundayDate';
import { SelectTime } from '@/shared/ui/SelectTime/SelectTime';
import { IHolidaysData } from '@/shared/lib/getHolidays/types';

function createFormSchema(typeGame: 'free' | 'friend') {
  const base = z.object({
    name: z.string().min(1, 'Введите имя или название команды!'),
    phone: z
      .string()
      .min(1, 'Введите телефон!')
      .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите номер полностью в формате +7 (xxx) xxx-xx-xx'),
    countPeople: z.coerce
      .number()
      .refine((val) => !isNaN(val), { message: 'Введите количество!' })
      .min(1, 'Минимум 1 человек')
      .max(40, 'Максимум 40 человек'),
    rent: z.boolean(),
    date: z.string(),
    time: z.string(),
  });

  if (typeGame === 'free') {
    return base;
  }

  return base.extend({
    date: z.unknown().refine((val): val is Dayjs => dayjs.isDayjs(val) && val.isValid(), { message: 'Укажите дату' }),
    time: z.string().min(1, 'Выберите время!'),
    countPeople: z.coerce
      .number()
      .refine((val) => !isNaN(val), { message: 'Введите количество!' })
      .min(8, 'Минимум 8 человек')
      .max(16, 'Максимум 16 человек'),
  });
}

type FormData = z.infer<ReturnType<typeof createFormSchema>>;

interface FormProps {
  typeGame: 'free' | 'friend';
  holidays: IHolidaysData;
  modalOpen: boolean;
  closeModal: () => void;
}

export const Form: FC<FormProps> = ({ typeGame, modalOpen, closeModal }) => {
  const [triggerCount, { isLoading }] = useFetchRecordMutation();

  useEffect(() => {
    if (!modalOpen) {
      reset(); // очищаем форму
    }
  }, [modalOpen]);

  const sundayDateRef = useRef(getNextSundayDate());

  const nextDay = dayjs().startOf('day').add(1, 'day');

  const formSchema = useMemo(() => createFormSchema(typeGame), [typeGame]);

  const defaultValues = useMemo((): FormData => {
    const base = {
      name: '',
      phone: '',
      countPeople: 1,
      rent: false,
      date: sundayDateRef.current.day,
      time: sundayDateRef.current.time,
    };

    if (typeGame === 'friend') {
      return {
        ...base,
        date: nextDay,
        time: '',
        countPeople: 8,
      };
    }

    return base;
  }, [typeGame]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const selectedDay = watch('date'); // отслеживаем изменения поля date

  const sendForm = async (payloadFormData: RecordSliceState) => {
    try {
      await triggerCount(payloadFormData).unwrap();
      //успех

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data: FormData) => {
    const payloadFormData: RecordSliceState = {
      typeGame,
      name: data.name,
      phone: data.phone,
      countPeople: +data.countPeople,
      rent: data.rent,
      date: data.date,
      time: data.time,
    };

    if (typeGame === 'friend' && 'date' in data) {
      payloadFormData.date = data.date.format('DD.MM.YYYY');
      payloadFormData.time = data.time;
    }

    sendForm(payloadFormData);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ru"
      localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name')}
          label={'Имя или название команды'}
          error={!!errors.name}
          helperText={errors.name?.message}
          autoComplete={'off'}
          variant={'outlined'}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <MaskInput
              {...field}
              label={'Телефон'}
              mask="+7 (000) 000-00-00"
              definitions={{
                '#': /[1-9]/,
              }}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              inputModeIsNumeric={'numeric'}
              placeholder={'+7 (xxx) xxx-xx-xx'}
            />
          )}
        />

        <Controller
          name="countPeople"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Количество человек"
              variant="outlined"
              error={!!errors.countPeople}
              helperText={errors.countPeople?.message}
              autoComplete="off"
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, '');
                field.onChange(+digits || '');
              }}
              inputProps={{
                inputMode: 'numeric', // для мобильных клавиатур
              }}
            />
          )}
        />

        {typeGame === 'free' && (
          <span>
            {'Дата и время игры: '} {`${sundayDateRef.current.day} ${sundayDateRef.current.time}`}
          </span>
        )}

        {typeGame === 'friend' && (
          <>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Дата"
                  value={field.value}
                  minDate={dayjs().startOf('day').add(1, 'day')} //след день
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      error: !!errors.date,
                      helperText: errors.date?.message as string | undefined,
                    },
                  }}
                />
              )}
            />

            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <SelectTime
                  label={'Время'}
                  value={field.value}
                  onChange={field.onChange}
                  day={selectedDay ? selectedDay?.format('DD.MM.YYYY') : ''}
                  error={!!errors.time}
                  helperText={errors.time?.message}
                />
              )}
            />
          </>
        )}

        <Controller
          name="rent"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox checked={field.value} onChange={(_, checked) => field.onChange(checked)} />}
              label="Аренда снаряжения"
            />
          )}
        />

        <Button label={isLoading ? <CircularProgress /> : 'Отправить'} type="submit" disabled={isLoading} />
      </form>
    </LocalizationProvider>
  );
};
