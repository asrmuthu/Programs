import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice1';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
