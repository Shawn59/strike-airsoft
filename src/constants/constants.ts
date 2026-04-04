import { recordSlice } from '@/store/recordSlice/recordSlice';

export const constants = {
  REDUX_SLICE: {
    modalImageSlice: 'modalImageSlice',
    reviewsSlice: 'reviewsSlice',
    recordSlice: 'recordSlice',
    modalRecordSlice: 'modalRecordSlice',
    snackbarSlice: 'snackbarSlice',
  } as const,
};
