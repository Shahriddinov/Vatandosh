import { createSlice } from "@reduxjs/toolkit";

import { getLatestTag, getPopularTag, getTagSearch } from "./extraReducer";

const initialState = {
  loading: true,
  tagData: [],
  latestLoading: false,
  latestTags: [],
  popularLoading: false,
  popularTags: [],
  error: null,
};

const tagSearchSlice = createSlice({
  name: "tagSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all tags
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

    // Get latest tags
    builder
      .addCase(getLatestTag.pending, (state) => {
        state.latestLoading = true;
      })
      .addCase(getLatestTag.fulfilled, (state, action) => {
        state.latestLoading = false;
        state.latestTags = action.payload;
      })
      .addCase(getLatestTag.rejected, (state, action) => {
        state.latestLoading = false;
        state.error = action.error.message;
      });

    // Get popular tags
    builder
      .addCase(getPopularTag.pending, (state) => {
        state.popularLoading = true;
      })
      .addCase(getPopularTag.fulfilled, (state, action) => {
        state.popularLoading = false;
        state.popularTags = action.payload;
      })
      .addCase(getPopularTag.rejected, (state, action) => {
        state.popularLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tagSearchSlice.reducer;
