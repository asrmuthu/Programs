import { configureStore } from "@reduxjs/toolkit";
import centersReducer from "./features/centersSlice";

export const store = configureStore({
  reducer: { centers: centersReducer },
});

export type RootState = ReturnType<typeof store.getState>;