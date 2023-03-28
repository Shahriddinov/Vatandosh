import { createSlice } from "@reduxjs/toolkit";

import {
  getVideos,
  getImages,
  getVideosMenus,
  getImagesMenus,
} from "./extraReducer";

const initialState = {
  loading: true,
  videoData: [],
  videoMenusData: [],
  imageData: [],
  imageMenusData: [],
  error: null,
};

const mediatekaSlice = createSlice({
  name: "mediateka",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get videos
    builder
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videoData = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get videos menus
    builder
      .addCase(getVideosMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideosMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.videoMenusData = action.payload;
      })
      .addCase(getVideosMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get images
    builder
      .addCase(getImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.imageData = action.payload;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get images menus
    builder
      .addCase(getImagesMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getImagesMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.imageMenusData = action.payload;
      })
      .addCase(getImagesMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mediatekaSlice.reducer;
