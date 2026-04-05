import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { constants } from '@/constants/constants';

interface IModalRecordState {
  typeGame?: 'free' | 'friend' | '';
  open: boolean;
}

const initialState: IModalRecordState = {
  open: false,
  typeGame: '',
};

const modalRecordSlice = createSlice({
  name: constants.REDUX_SLICE.modalRecordSlice,
  initialState,
  reducers: {
    setModalRecordData: (state, action: PayloadAction<Partial<IModalRecordState>>) => {
      return { ...state, ...action.payload };
    },
    resetModalRecordData: () => initialState,
  },
});

export const { setModalRecordData, resetModalRecordData } = modalRecordSlice.actions;
export default modalRecordSlice.reducer;
