import { createSlice } from "@reduxjs/toolkit";

import { getSearchResults } from "./extraReducer";

const initialState = {
  searchLoading: true,
  searchData: [],
  error: null,
};

const searchSlice = createSlice({
  name: "titleSearch",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getSearchResults.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchData = action.payload;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.searchLoading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
