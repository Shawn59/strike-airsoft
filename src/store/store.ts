'use client';
import { configureStore } from '@reduxjs/toolkit';
import modalImageSlice from '@/store/modalImageSlice/modalImageSlice';
import { reviewsSlice } from '@/store/reviewsSlice/reviewsSlice';
import { recordSlice } from '@/store/recordSlice/recordSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      modalImageState: modalImageSlice,
      [reviewsSlice.reducerPath]: reviewsSlice.reducer,
      [recordSlice.reducerPath]: recordSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reviewsSlice.middleware, recordSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
