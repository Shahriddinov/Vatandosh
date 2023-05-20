import { createSlice } from "@reduxjs/toolkit";
import { getAbout } from "./About";

const initialState = {
  loading: true,
  aboutData: [],
  error: null,
};

const aboutSlice = createSlice({
  name: "abouts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAbout.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutData = action.payload;
      })
      .addCase(getAbout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutSlice.reducer;
