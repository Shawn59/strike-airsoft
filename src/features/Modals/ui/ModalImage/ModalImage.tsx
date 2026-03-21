'use client';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { actionCloseModalImage } from '@/store/modalImageSlice/modalImageSlice';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalImage.module.scss';

export const ModalImage = () => {
  const modalImageState = useAppSelector((state) => state.modalImageState);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(actionCloseModalImage());
  };

  return (
    <Dialog className={styles.modalImage} open={!!modalImageState.src}>
      <IconButton aria-label="close" className={styles.closeBtn} onClick={handleClose}>
        <CloseIcon className={styles.closeIcon} />
      </IconButton>

      <DialogContent>
        {modalImageState.src && (
          <Image fill src={modalImageState.src} className={styles.image} alt={'картинка модалки'} />
        )}
      </DialogContent>
    </Dialog>
  );
};
