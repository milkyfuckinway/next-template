import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  height: number;
  scrollbarWidth: number;
  width: number;
  y: number;
};

const initialState = {
  height: 0,
  scrollbarWidth: 0,
  width: 0,
  y: 0,
} as InitialState;

const documentSlice = createSlice({
  initialState,
  name: 'document',
  reducers: {
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
    setScrollbarWidth(state, action: PayloadAction<number>) {
      state.scrollbarWidth = action.payload;
    },
    setWidth(state, action: PayloadAction<number>) {
      state.width = action.payload;
    },
    setY(state, action: PayloadAction<number>) {
      state.y = action.payload;
    },
  },
});

export const { setHeight, setScrollbarWidth, setWidth, setY } = documentSlice.actions;

export default documentSlice.reducer;
