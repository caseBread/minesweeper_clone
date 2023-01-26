import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    updateBoard: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.mineCount = action.payload.mineCount;
      state.openedCount = action.payload.openedCount;
    },
  },
});

export default gameSlice;
