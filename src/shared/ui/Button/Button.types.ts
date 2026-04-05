import { ButtonProps } from '@mui/material';
import React from 'react';

export interface IButtonShared extends ButtonProps {
  label: string | React.ReactNode;
  theme?: 'Orange';
}
