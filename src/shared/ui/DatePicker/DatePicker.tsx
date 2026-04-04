import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

export default function MyDatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      label="Выберите дату"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      slotProps={{
        textField: {
          onClick: () => setIsOpen(true),
          readOnly: true,
          variant: 'outlined',
        },
      }}
    />
  );
}
