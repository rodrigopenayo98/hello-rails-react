import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice.js';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;