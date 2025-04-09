// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice1'; // Import the reducer from Slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter slice to the store
  },
});

export default store;
