import { createSlice } from "@reduxjs/toolkit";

import { getLibraryAll, getLibraryOne, getLibrarySlider } from "./extraReducer";

const initialState = {
  libraryLoading: true,
  libraryData: [],
  ebookLoading: true,
  ebookData: [],
  librarySliderLoading: true,
  librarySliderData: [],
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get books with pagination
    builder
      .addCase(getLibraryAll.pending, (state) => {
        state.libraryLoading = true;
      })
      .addCase(getLibraryAll.fulfilled, (state, action) => {
        state.libraryLoading = false;
        state.libraryData = action.payload;
      })
      .addCase(getLibraryAll.rejected, (state, action) => {
        state.libraryLoading = false;
        state.error = action.error.message;
      });

    // Get one book
    builder
      .addCase(getLibraryOne.pending, (state) => {
        state.ebookLoading = true;
      })
      .addCase(getLibraryOne.fulfilled, (state, action) => {
        state.ebookLoading = false;
        state.ebookData = action.payload;
      })
      .addCase(getLibraryOne.rejected, (state, action) => {
        state.ebookLoading = false;
        state.error = action.error.message;
      });

    // Get slider
    builder
      .addCase(getLibrarySlider.pending, (state) => {
        state.librarySliderLoading = true;
      })
      .addCase(getLibrarySlider.fulfilled, (state, action) => {
        state.librarySliderLoading = false;
        state.librarySliderData = action.payload;
      })
      .addCase(getLibrarySlider.rejected, (state, action) => {
        state.librarySliderLoading = false;
        state.error = action.error.message;
      });
  },
});

export default librarySlice.reducer;
