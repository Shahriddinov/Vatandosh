import { createSlice } from "@reduxjs/toolkit";
import { getWebSiteNews } from "./getSiteNews";

const initialState = {
  loading: true,
  siteNewsOneData: [],
  error: null,
};

const websiteNewsSlice = createSlice({
  name: "websiteNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWebSiteNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWebSiteNews.fulfilled, (state, action) => {
        state.loading = false;
        state.siteNewsOneData = action.payload;
      })
      .addCase(getWebSiteNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default websiteNewsSlice.reducer;
