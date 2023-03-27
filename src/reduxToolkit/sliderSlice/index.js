import { createSlice } from "@reduxjs/toolkit";

import { getSlider } from "./extraReducer";

const initialState = {
  loading: true,
  sliderData: [],
  error: "",
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.sliderData = action.payload;
      })
      .addCase(getSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
