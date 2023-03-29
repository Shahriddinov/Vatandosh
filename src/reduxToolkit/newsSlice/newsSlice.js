import { createSlice } from "@reduxjs/toolkit";

import { getNews, getDetailData } from "./extraReducer";

const initialState = {
  loadingNews: true,
  loadingDetail: true,
  newsData: [],
  detailData: {},
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
      .addCase(getDetailData.pending, (state) => {
        state.loadingDetail = true;
        state.error = null;
      })
      .addCase(getDetailData.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.detailData = action.payload.data;
      })
      .addCase(getDetailData.rejected, (state, action) => {
        state.loadingDetail = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
