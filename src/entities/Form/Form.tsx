'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Box, Grid, Typography, Paper } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputMask from 'react-input-mask';
import dayjs, { Dayjs } from 'dayjs';
import styles from './Form.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { Button, MaskInput } from '@/shared';
import { useFetchRecordMutation } from '@/store/recordSlice/recordSlice';
import { getNextSundayDate } from '@/utils/getNextSundayDate';

const formSchema = z.object({
  name: z.string().min(1, 'Поле ФИО обязательно'),
  countPeople: z
    .number({
      required_error: 'Поле обязательно',
      invalid_type_error: 'Введите число',
    })
    .min(8, 'Минимум 8 человек')
    .max(16, 'Максимум 16 человек'),
});

type FormData = z.infer<typeof formSchema>;
/*// Define the form schema with Zod
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  quantity: z
    .number({ invalid_type_error: 'Quantity must be a number' })
    .min(1, 'Quantity must be at least 1')
    .max(100, 'Quantity cannot exceed 100'),
  dateTime: z.date({ required_error: 'Date and time are required' }),
  phone: z.string().regex(/^\(\d{3}\)-\d{3}-\d{4}$/, 'Phone must be in format (xxx)-xxx-xxxx'),
});

type FormData = z.infer<typeof formSchema>;*/

export const Form = () => {
  const [triggerCount] = useFetchRecordMutation();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      countPeople: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    //  dispatch(actionSetUser({ ...data, id: uuid() }));

    console.log('data = ', data);
    triggerCount(data);

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

        <MaskInput
          {...register('phone', {
            required: 'Введите телефон',
            minLength: { value: 17, message: 'некорректный номер' },
          })}
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

        <span>
          {'Дата: '} {getNextSundayDate()}
        </span>

        <Button label={'Отправить'} type="submit" />
      </form>
    </LocalizationProvider>
  );
};
