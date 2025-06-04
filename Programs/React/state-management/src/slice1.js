import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
  name: "customer1",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload ?? 1;
    },
  },
});

export const { increment } = slice1.actions;
export default slice1.reducer;
