import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { constants } from '@/constants/constants';

interface IModalImageSliceState {
  src: string;
}

const initialState = {
  src: '',
};

const modalImageSlice = createSlice({
  name: constants.REDUX_SLICE.modalImageSlice,
  initialState,
  reducers: {
    openModalImage: (state: IModalImageSliceState, action: PayloadAction<IModalImageSliceState>) => {
      const { src } = action.payload;

      state.src = src;
    },

    closeModalImage: (state) => {
      state.src = initialState.src;
    },
  },
});

//export const { openModalImage, closeModalImage } = modalImageSlice.actions;
export const actionOpenModalImage = modalImageSlice.actions.openModalImage;
export const actionCloseModalImage = modalImageSlice.actions.closeModalImage;

export default modalImageSlice.reducer;
