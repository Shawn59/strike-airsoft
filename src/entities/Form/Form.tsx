'use client';

import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { type Dayjs } from 'dayjs';
import type { FC } from 'react';
import styles from './Form.module.scss';
import { Button, MaskInput } from '@/shared';
import { useFetchRecordMutation, type RecordSliceState } from '@/store/recordSlice/recordSlice';
import { getNextSundayDate } from '@/utils/getNextSundayDate';

function createFormSchema(typeGame: 'free' | 'friend') {
  const base = z.object({
    name: z.string().min(1, 'Поле ФИО обязательно'),
    phone: z
      .string()
      .min(1, 'Укажите телефон')
      .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите номер полностью в формате +7 (xxx) xxx-xx-xx'),
    countPeople: z
      .number({
        required_error: 'Поле обязательно',
        invalid_type_error: 'Введите число',
      })
      .min(8, 'Минимум 8 человек')
      .max(16, 'Максимум 16 человек'),
    rent: z.boolean(),
  });

  if (typeGame === 'free') {
    return base;
  }

  return base.extend({
    date: z.unknown().refine((val): val is Dayjs => dayjs.isDayjs(val) && val.isValid(), { message: 'Укажите дату' }),
    time: z.unknown().refine((val): val is Dayjs => dayjs.isDayjs(val) && val.isValid(), { message: 'Укажите время' }),
  });
}

type FormData = z.infer<ReturnType<typeof createFormSchema>>;

interface FormProps {
  typeGame: 'free' | 'friend';
}

export const Form: FC<FormProps> = ({ typeGame }) => {
  const [triggerCount] = useFetchRecordMutation();

  const formSchema = useMemo(() => createFormSchema(typeGame), [typeGame]);

  const defaultValues = useMemo((): FormData => {
    const base = {
      name: '',
      phone: '',
      countPeople: 8,
      rent: false,
    };
    if (typeGame === 'friend') {
      return {
        ...base,
        date: dayjs(),
        time: dayjs().hour(12).minute(0).second(0).millisecond(0),
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
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const payload: RecordSliceState = {
      typeGame,
      name: data.name,
      phone: data.phone,
      countPeople: data.countPeople,
      rent: data.rent,
    };

    if (typeGame === 'friend' && 'date' in data && 'time' in data && 'rent' in data) {
      payload.date = data.date.format('DD.MM.YYYY');
      payload.time = data.time.format('HH:mm');
    }

    triggerCount(payload);

    handleReset();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                // Оставляем только цифры
                const numericValue = e.target.value.replace(/\D/g, '');
                field.onChange(+numericValue);
              }}
              inputProps={{
                inputMode: 'numeric', // для мобильных клавиатур
              }}
            />
          )}
        />

        {typeGame === 'free' && (
          <span>
            {'Дата: '} {getNextSundayDate()}
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
                <TimePicker
                  label="Время"
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      error: !!errors.time,
                      helperText: errors.time?.message as string | undefined,
                    },
                  }}
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

        <Button label={'Отправить'} type="submit" />
      </form>
    </LocalizationProvider>
  );
};
