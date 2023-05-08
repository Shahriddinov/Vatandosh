import { createSlice } from "@reduxjs/toolkit";

import { getWebinarSlider } from "./extraReducer";

const initialState = {
  data: {},
  dataLoading: true,
  error: null,
};

const webinarSlidesSlice = createSlice({
  name: "webinarSlidesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get webinar slides
    builder
      .addCase(getWebinarSlider.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getWebinarSlider.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.data = action.payload;
      })
      .addCase(getWebinarSlider.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.error.message;
      });
  },
});

export default webinarSlidesSlice.reducer;
