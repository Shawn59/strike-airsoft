import { FormControl, InputLabel, MenuItem, Select as SelectMUI, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export const Select = ({ label = 'Время' }) => {
  const time = [
    { value: '10:00', label: '10:00', disable: false },
    { value: '11:00', label: '11:00', disable: false },
    { value: '12:00', label: '12:00', disable: false },
    { value: '13:00', label: '13:00', disable: false },
    { value: '14:00', label: '14:00', disable: false },
    { value: '15:00', label: '15:00', disable: false },
    { value: '16:00', label: '16:00', disable: false },
    { value: '17:00', label: '17:00', disable: false },
    { value: '18:00', label: '18:00', disable: false },
    { value: '19:00', label: '19:00', disable: false },
    { value: '20:00', label: '20:00', disable: false },
    { value: '21:00', label: '21:00', disable: false },
    { value: '22:00', label: '22:00', disable: false },
  ];

  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <SelectMUI
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {time.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};
