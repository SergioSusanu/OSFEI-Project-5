import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { localBook, BookCollection } from '../../models/books';

const fetchFavoritesFromLocalStorage = ():BookCollection => {
  let list = localStorage.getItem('favorites')
  if (list && typeof list !== 'undefined') return JSON.parse(list)
  
  return {books:undefined}
}

const initialState: BookCollection = fetchFavoritesFromLocalStorage()


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFavorite: (state, action:PayloadAction<localBook>) => {
      if (typeof state.books === 'undefined'){
        state.books = [action.payload]
      } else state.books.push(action.payload);
    },
    removeFromFavorite: (state, action:PayloadAction<string>) => {
      if (state.books) {
        state.books = state.books.filter((e) => {
        return e.id !== action.payload
      })
      }  
    }
   
  },
});

export const { addFavorite, removeFromFavorite } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.books;
export default favoritesSlice.reducer;
