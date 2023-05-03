import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface book{
    id:string;
    name:string | undefined;
    image:string | undefined;
    description:string | undefined;
    authors:string[] | [];
}

export interface favoriteBooks{
    books: book[] | undefined;
}

const initialState: favoriteBooks = {
    books: [
        {id:"_fsElhcbSwIC",
        name: "Python For Dummies",
        image: "http://books.google.com/books/content?id=_fsElhcbSwIC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70jFdwOYJJ8KEIZbMdFysK5xk2J8uV9tnL-7O_70HFnJYQehuzOaBTJYtJbYjLN9WTvTu1icl-0FHenbk7KjPQCRigA-6bapS1b8waWBa_3oCnuvqyihhOVULQrBLhpZkLJpC3H&source=gbs_api",
        authors: ["Stef Maruch", "Aahz Maruch"],
        description: "Python is one of the most powerful, easy-to-read programming languages around, but it does have its limitations. This general purpose, high-level language that can be extended and embedded is a smart option"
    }
    ]
}
// export interface favoritesState {
//   value: number;
//   status: 'idle' | 'loading' | 'failed';
// }

// const initialState: CounterState = {
//   value: 0,
//   status: 'idle',
// };


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFavorite: (state, action:PayloadAction<book>) => {
      state.books && state.books.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      if (state.books) {
        state.books = state.books.filter((e) => {
        return e.id !== action.payload
      })
      }  
    }
   
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       })
//       .addCase(incrementAsync.rejected, (state) => {
//         state.status = 'failed';
//       });
//   },
});

export const { addFavorite, removeFromFavorite } = favoritesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFavorites = (state: RootState) => state.favorites.books;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default favoritesSlice.reducer;
