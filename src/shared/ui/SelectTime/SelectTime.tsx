import { FormControl, InputLabel, MenuItem, Select as SelectMUI, SelectChangeEvent, SelectProps } from '@mui/material';
import { FC, useRef, useState } from 'react';
import dayjs from 'dayjs';

interface ISelectTime extends Omit<SelectProps, 'onChange' | 'value'> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

const TIME_LIST = [
  { value: '10:00' },
  { value: '11:00' },
  { value: '12:00' },
  { value: '13:00' },
  { value: '14:00' },
  { value: '15:00' },
  { value: '16:00' },
  { value: '17:00' },
  { value: '18:00' },
  { value: '19:00' },
  { value: '20:00' },
  { value: '21:00' },
  { value: '22:00' },
];

export const SelectTime: FC<ISelectTime> = ({ label = 'Время', value, onChange }) => {
  const [open, setOpen] = useState(false);
  const nowTimeRef = useRef('');

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  const handleOpen = () => {
    setOpen(true);
    nowTimeRef.current = dayjs().format('HH:mm');
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
      >
        {TIME_LIST.map((item) => (
          <MenuItem value={item.value} disabled={nowTimeRef.current > item.value}>
            {item.value}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};
