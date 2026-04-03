'use client';

import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import styles from './RecordModal.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from '@/entities/Form/Form';
import { Button } from '@/shared';
import { useAppDispatch } from '@/store/hooks';
import { IRecordCardDataItem } from '@/widgets/RecordCard/ui/RecordCard.types';

interface IRecordModal {
  typeGame: IRecordCardDataItem['typeGame'];
}

export const RecordModal: FC<IRecordModal> = React.memo(({ typeGame }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button label={'Записаться'} onClick={openModal} className={styles.submitBtn} />

      <Dialog open={open} className={styles.recordDialog} onClose={closeModal}>
        <DialogTitle className={styles.header}>
          <span className={styles.title}>{'С друзьями'}</span>

          <IconButton onClick={closeModal}>
            <CloseIcon className={styles.closeIcon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Form key={typeGame} typeGame={typeGame} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
});
