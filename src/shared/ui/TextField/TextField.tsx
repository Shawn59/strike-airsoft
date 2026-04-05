import { TextFieldProps } from '@mui/material';
import { FC } from 'react';

interface ITextField extends TextFieldProps {}

export const TextField: FC<ITextField> = () => {
  return <TextField />;
};
