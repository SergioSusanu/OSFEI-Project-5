import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../app/store';

interface SearchTerm {
  searchTerm: string;
}

const initialState:SearchTerm = {
  searchTerm:''
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
});

export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
