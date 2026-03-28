import { Button as ButtonMUI } from '@mui/material';
import { FC } from 'react';
import { IButtonShared } from '@/shared/ui/Button/Button.types';
import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button: FC<IButtonShared> = ({ label, className, theme = 'Orange', ...rest }) => {
  return (
    <ButtonMUI className={classNames(styles.button, styles[theme], className as any)} {...rest}>
      {label}
    </ButtonMUI>
  );
};
