import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/favoritesSlice';
import searchReducer from '../features/searchSlice'
import { booksApi } from '../features/booksApi';


export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer,
    [booksApi.reducerPath]:booksApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
