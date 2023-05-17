import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  adress: '',
};

export const titleCinemaSlice = createSlice({
  name: 'titleCinema',
  initialState,
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
  },
});

export default titleCinemaSlice.reducer;
