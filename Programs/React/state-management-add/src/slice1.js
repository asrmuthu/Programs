import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const slice1 = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = slice1.actions;

export default slice1.reducer;
