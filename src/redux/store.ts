import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import gameSlice from './game/slice';

const reducers = combineReducers({
  game: gameSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
