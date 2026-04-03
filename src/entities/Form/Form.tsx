'use client';

import { useCallback, useMemo } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Checkbox, FormControlLabel, Select, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
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

/** Часы включительно; минуты всегда :00 */
const MIN_GAME_HOUR = 10;
const MAX_GAME_HOUR = 22;

/** По воскресеньям закрыт слот [14:00; 16:00) — недоступны 14:00 и 15:00 */
function isSundayBlockedHour(hour: number) {
  return hour === 14 || hour === 15;
}

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
    time: z.string({ required_error: 'Поле обязательно' }),
  });
  /*   .superRefine((data, ctx) => {
      if (!dayjs.isDayjs(data.date) || !data.time) return;

      if (data.date.day() === 0 && isSundayBlockedHour(h)) {
        ctx.addIssue({
          code: 'custom',
          message: 'По воскресеньям недоступно время с 14:00 до 16:00',
          path: ['time'],
        });
      }
    });*/
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
        time: '10:00',
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

  const watchedDate = useWatch({ control, name: 'date' });

  const shouldDisableTime = useCallback(
    (value: Dayjs, view: 'hours' | 'minutes' | 'seconds') => {
      if (view === 'minutes') {
        return value.minute() !== 0;
      }
      if (view !== 'hours') {
        return false;
      }

      const gameDate = watchedDate && dayjs.isDayjs(watchedDate) && watchedDate.isValid() ? watchedDate : null;
      if (gameDate?.day() === 0 && isSundayBlockedHour(value.hour())) {
        return true;
      }
      return false;
    },
    [watchedDate],
  );

  const onSubmit = (data: FormData) => {
    console.log('data = ', data);
    const payload: RecordSliceState = {
      typeGame,
      name: data.name,
      phone: data.phone,
      countPeople: data.countPeople,
      rent: data.rent,
    };

    if (typeGame === 'friend' && 'date' in data && 'time' in data && 'rent' in data) {
      payload.date = data.date.format('DD.MM.YYYY');
      payload.time = data.time;
    }

    triggerCount(payload);

    handleReset();
  };

  const handleReset = () => {
    reset();
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
                field.onChange(digits === '' ? '' : +digits);
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
                <SelectTime label={'Время'} value={field.value} onChange={field.onChange} />
                /*  <TimePicker
                  label="Время"
                  ampm={false}
                  views={['hours']}
                  openTo="hours"
                  format="HH:00"
                  minutesStep={60}
                  minTime={minSelectableTime}
                  maxTime={maxSelectableTime}
                  shouldDisableTime={shouldDisableTime}
                  value={field.value}
                  onChange={(v) => {
                    if (!v) {
                      field.onChange(v);
                      return;
                    }
                    field.onChange(v.minute(0).second(0).millisecond(0));
                  }}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      error: !!errors.time,
                      helperText: errors.time?.message as string | undefined,
                      inputProps: { readOnly: true },
                    },
                  }}
                />*/
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
