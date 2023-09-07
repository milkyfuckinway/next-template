import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  theme: string;
};

const initialState = {
  theme: 'light',
} as InitialState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    toggle(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
