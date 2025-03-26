import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slice1";

const store = configureStore({
  devTools: true,
  reducer: {
    customer11: slice1,
  },
});

export default store;
