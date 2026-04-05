import { actionShowSnackbar } from '@/store/snackbarSlice/snackbarSlice';
import { Middleware } from 'redux';

export const statusMiddleware: Middleware = (store) => (next) => (action) => {
  if (action?.payload) {
    const isRejected = action?.type?.endsWith('/rejected');
    const isFulfilled = action?.type?.endsWith('/fulfilled');

    //ошибки
    if (isRejected) {
      let errorMessage = 'Неизвестная ошибка';
      if (action?.payload?.data?.message) errorMessage = action.payload.data.message;
      else if (action?.payload?.message) errorMessage = action.payload.message;

      store.dispatch(actionShowSnackbar({ message: errorMessage, severity: 'error' }));
    }

    //успех
    if (isFulfilled) {
      const successMessage = action.payload?.data?.message || action.payload?.message;

      if (successMessage) {
        store.dispatch(actionShowSnackbar({ message: successMessage, severity: 'success' }));
      }
    }
  }

  return next(action);
};
