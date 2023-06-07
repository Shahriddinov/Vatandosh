import { createSlice } from "@reduxjs/toolkit";
import { getWebSiteEvent } from "./getSiteEvent";

const initialState = {
  loading: true,
  siteEventOneData: [],
  error: null,
};

const websiteEventSlice = createSlice({
  name: "websiteEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWebSiteEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWebSiteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.siteNewsOneData = action.payload;
      })
      .addCase(getWebSiteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default websiteEventSlice.reducer;
