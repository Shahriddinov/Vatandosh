import { createSlice } from "@reduxjs/toolkit";

import { getNews, getOneNews } from "./extraReducer";

const initialState = {
  loading: true,
  newsData: [],
  oneData: [],
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all news
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get one news
    builder
      .addCase(getOneNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneNews.fulfilled, (state, action) => {
        state.loading = false;
        state.oneData = action.payload;
      })
      .addCase(getOneNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
