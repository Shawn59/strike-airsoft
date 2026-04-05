import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as SelectMUI,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import { FC, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { getSundays } from '@/shared/lib/getHolidays/getHolidays';

interface ISelectTime extends Omit<SelectProps, 'onChange' | 'value'> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  day: string;
  helperText?: string;
}

const TIME_LIST = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

const sundays = getSundays();
const sundaysDisabledTime = TIME_LIST.slice(2, 7);

export const SelectTime: FC<ISelectTime> = ({ label = 'Время', value, onChange, day, error, helperText }) => {
  const [open, setOpen] = useState(false);
  const nowTimeRef = useRef('');
  const nowDayRef = useRef('');

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  const handleOpen = () => {
    setOpen(true);
    nowTimeRef.current = dayjs().format('HH:mm');
    nowDayRef.current = dayjs().startOf('day').add(1, 'day').format('DD.MM.YYYY');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <SelectMUI
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        error={error}
      >
        {TIME_LIST.map((time) => {
          const isNextDayDisable = nowTimeRef.current > time && day === nowDayRef.current;
          const isSundayDayDisable = sundays.includes(day) && sundaysDisabledTime.includes(time);

          return (
            <MenuItem key={time} value={time} disabled={isNextDayDisable || isSundayDayDisable}>
              {time}
            </MenuItem>
          );
        })}
      </SelectMUI>

      {helperText && <FormHelperText error={true}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
