import { configureStore } from "@reduxjs/toolkit";
import createSlice_com from "./createSlice_com";

const store = configureStore({
  devTools: true,
  reducer: {
    customer11: createSlice_com,  // ✅ Name should match useSelector
  },
});

export default store;
