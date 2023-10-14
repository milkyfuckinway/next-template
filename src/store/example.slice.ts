import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  example: string;
};

const initialState = {
  example: 'string',
} as InitialState;

const exampleSlice = createSlice({
  initialState,
  name: 'name',
  reducers: {
    onEvent(state, action: PayloadAction<string>) {
      state.example = action.payload;
    },
  },
});

export const { onEvent } = exampleSlice.actions;

export default exampleSlice.reducer;
