import { createSlice } from "@reduxjs/toolkit";

import {
  getVideosMenus,
  getImagesMenus,
  getMediaPagination,
  getImagesPagination,
} from "./extraReducer";

const initialState = {
  data: {},
  dataLoading: true,
  videoMenuLoading: true,
  imageMenuLoading: true,
  videoMenusData: [],
  imageMenusData: [],
  error: null,
};

const mediatekaSlice = createSlice({
  name: "mediateka",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get videos with pagination
    builder
      .addCase(getMediaPagination.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getMediaPagination.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = action.payload;
      })
      .addCase(getMediaPagination.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.error.message;
      });

    // Get videos menus
    builder
      .addCase(getVideosMenus.pending, (state) => {
        state.videoMenuLoading = true;
      })
      .addCase(getVideosMenus.fulfilled, (state, action) => {
        state.videoMenuLoading = false;
        state.videoMenusData = action.payload;
      })
      .addCase(getVideosMenus.rejected, (state, action) => {
        state.videoMenuLoading = false;
        state.error = action.error.message;
      });

    // Get images menus
    builder
      .addCase(getImagesMenus.pending, (state) => {
        state.imageMenuLoading = true;
      })
      .addCase(getImagesMenus.fulfilled, (state, action) => {
        state.imageMenuLoading = false;
        state.imageMenusData = action.payload;
      })
      .addCase(getImagesMenus.rejected, (state, action) => {
        state.imageMenuLoading = false;
        state.error = action.error.message;
      });
  },
});

export default mediatekaSlice.reducer;
