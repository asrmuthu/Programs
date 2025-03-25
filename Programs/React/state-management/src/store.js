import { configureStore } from "@reduxjs/toolkit";
import createSlice_com from "./createSlice_com";

const store = configureStore({
  devTools: true,
  reducer: {
    customer11: createSlice_com,
  },
});

export default store;
