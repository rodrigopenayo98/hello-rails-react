import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandom', async () => {
  const response = await fetch('/api/greetings/random');
  const data = await response.json(); // Extraer el mensaje del objeto JSON
  return data.message;
});

const initialState = {
  greeting: '',
  error: '',
  loading: false,
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })

      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        return { ...state, greeting: action.payload.message, loading: false };
      })
      
      .addCase(fetchRandomGreeting.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      });
  },
});

export default greetingSlice.reducer;
