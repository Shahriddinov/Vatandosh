import { createSlice } from "@reduxjs/toolkit";
import { getWebinarBody } from "./getwebinarbody";

const initialState = {
  loading: true,
  webinarDataBody: [],
  webinarDataBodyError: null,
};

const webinarBodySlice = createSlice({
  name: "webinar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWebinarBody.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWebinarBody.fulfilled, (state, action) => {
        state.loading = false;
        state.webinarDataBody = action.payload;
      })
      .addCase(getWebinarBody.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default webinarBodySlice.reducer;
