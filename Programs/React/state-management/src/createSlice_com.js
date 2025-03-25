import { createSlice } from "@reduxjs/toolkit";

const createSlice_com = createSlice({
  name: "customer1",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = createSlice_com.actions;
export default createSlice_com.reducer;
