import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: null,
  price: 0,
  freePlace: 0,
  hall: {
    seats: 0,
    number: 0,
  },
  film: {
    name: '',
    direactor: '',
    operator: '',
    ganre: '',
    preview: '',
    duration: 0,
    budget: 0,
    roles: [
      {
        full_name: '',
      },
    ],
  },
};

export const infoSessionSlice = createSlice({
  name: 'infoSession',
  initialState,
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
  },
});

export default infoSessionSlice.reducer;
