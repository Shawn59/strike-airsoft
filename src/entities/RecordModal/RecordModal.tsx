'use client';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import styles from './RecordModal.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from '@/entities/Form/Form';

export const RecordModal = React.memo(() => {
  const [open, setOpen] = useState(true);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} className={styles.recordDialog} onClose={closeModal}>
      <DialogTitle className={styles.header}>
        <span className={styles.title}>{'С друзьями'}</span>

        <IconButton onClick={closeModal}>
          <CloseIcon className={styles.closeIcon} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Form />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
});
