import { configureStore, createSlice } from "@reduxjs/toolkit";

// 🔹 Create a slice (Reducer + Actions)
const counterSlice1 = createSlice({
  name: "counter1",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});


// 🔹 Create and export the store
export const store = configureStore({
  reducer: { counter1: counterSlice1.reducer },
});

// 🔹 Export actions
export const { increment, decrement } = counterSlice1.actions;

export default store;
