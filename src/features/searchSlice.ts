import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../app/store';

interface SearchModel {
  searchTerm: string;
  startedSearching:boolean;
}

const initialState:SearchModel = {
  searchTerm:'',
  startedSearching:false
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.startedSearching = true;
    },
  },
});

export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
