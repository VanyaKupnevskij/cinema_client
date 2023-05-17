import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const listCinemasSlice = createSlice({
  name: 'listCinemas',
  initialState,
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default listCinemasSlice.reducer;
