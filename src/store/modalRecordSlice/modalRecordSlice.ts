import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

interface ModalRecordState {
  typeGame?: 'free' | 'friend' | '';
  open: boolean;
}

const initialState: ModalRecordState = {
  open: false,
  typeGame: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setModalRecordData: (state, action: PayloadAction<Partial<ModalRecordState>>) => {
      return { ...state, ...action.payload };
    },
    resetModalRecordData: () => initialState,
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
