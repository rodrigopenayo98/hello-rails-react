import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {

  const response = await axios.get('/api/greeting');
  return response.data;

});

const greetingSlice = createSlice({

  name: 'greeting',
  initialState: { value: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.value = action.payload.greeting;
      });
  },
});


export default greetingSlice.reducer;