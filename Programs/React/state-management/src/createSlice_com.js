import { createSlice } from "@reduxjs/toolkit";

// 🔹 Create a slice (Reducer + Actions)
const createSlice_com = createSlice({
  name: "customer1",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;  // ✅ Corrected
    },
    decrement: (state) => {
      state.count -= 1;  // ✅ Corrected
    },
  },
});

// 🔹 Export actions and reducer
export const { increment, decrement } = createSlice_com.actions;
export default createSlice_com.reducer;  // ✅ Export the reducer
