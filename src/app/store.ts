import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/favoritesSlice';
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
