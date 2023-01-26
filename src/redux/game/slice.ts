import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {},
});

export default gameSlice;
