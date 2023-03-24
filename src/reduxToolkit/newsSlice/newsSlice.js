import { createSlice } from "@reduxjs/toolkit";

import { getNews, getOneNews } from "./extraReducer";

const initialState = {
  loadingNews: true,
  loadingOneNews: true,
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
        state.loadingNews = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loadingNews = false;
        state.newsData = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loadingNews = false;
        state.error = action.error.message;
      });

    // Get one news
    builder
      .addCase(getOneNews.pending, (state) => {
        state.loadingOneNews = true;
        state.error = null
      })
      .addCase(getOneNews.fulfilled, (state, action) => {
        state.loadingOneNews = false;
        state.oneData = action.payload.data;
      })
      .addCase(getOneNews.rejected, (state, action) => {
        state.loadingOneNews = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
