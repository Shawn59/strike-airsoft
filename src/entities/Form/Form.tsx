'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from './Form.module.scss';
import { Button, MaskInput } from '@/shared';
import { useFetchRecordMutation } from '@/store/recordSlice/recordSlice';
import { getNextSundayDate } from '@/utils/getNextSundayDate';

const formSchema = z.object({
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
});

type FormData = z.infer<typeof formSchema>;

export const Form = ({ typeGame }) => {
  const [triggerCount] = useFetchRecordMutation();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      countPeople: '' as unknown as FormData['countPeople'],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
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

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
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

        <span>
          {'Дата: '} {getNextSundayDate()}
        </span>

        <Button label={'Отправить'} type="submit" />
      </form>
    </LocalizationProvider>
  );
};
