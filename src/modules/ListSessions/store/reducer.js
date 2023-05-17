import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const listSessionsSlice = createSlice({
  name: 'listSessions',
  initialState,
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default listSessionsSlice.reducer;
