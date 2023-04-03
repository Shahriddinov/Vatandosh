import { createSlice } from "@reduxjs/toolkit";

import { getTagSearch } from "./extraReducer";

const initialState = {
  loading: true,
  tagData: [],
  error: null,
};

const tagSearchSlice = createSlice({
  name: "tagSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTagSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.tagData = action.payload;
      })
      .addCase(getTagSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tagSearchSlice.reducer;
