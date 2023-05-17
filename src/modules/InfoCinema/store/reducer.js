import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: [],
  halls: [],
};

export const infoCinemaSlice = createSlice({
  name: 'infoCinema',
  initialState,
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
  },
});

export default infoCinemaSlice.reducer;
