import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { localBook, BookCollection } from '../../models/books';

const fetchFavoritesFromLocalStorage = () : BookCollection => {
  const list = localStorage.getItem('favorites')
  if (list) {
    const favs:BookCollection = {
      books: JSON.parse(list)
    }
    return favs
  }
  
  const localInitialState:BookCollection = {
    books: new Array<localBook>()
  }
  return localInitialState
}

const initialState:BookCollection = fetchFavoritesFromLocalStorage()
// BookCollection = {
//   books: new Array<localBook>()
// }


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFavorite: (state, action:PayloadAction<localBook>) => {
    
     state.books.push(action.payload)
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
