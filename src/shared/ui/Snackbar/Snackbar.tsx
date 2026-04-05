'use client';

import React, { useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { actionHideSnackbar } from '@/store/snackbarSlice/snackbarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ISnackbarState } from '@/store/snackbarSlice/snackbarSlice.slice.types';

function CustomSnackbar() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const snackbar: ISnackbarState = useAppSelector((state) => state.snackbarSlice);

  useEffect(() => {
    if (snackbar?.open) {
      enqueueSnackbar(snackbar.message, {
        variant: snackbar.severity,
        autoHideDuration: snackbar.duration,
        onClose: () => {
          dispatch(actionHideSnackbar());
        },
      });
    }
  }, [snackbar?.id, enqueueSnackbar]);

  return <></>;
}

export const SnackbarAtom = React.memo(() => {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <CustomSnackbar />
    </SnackbarProvider>
  );
});
