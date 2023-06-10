import { createSlice } from "@reduxjs/toolkit";

import {
  getNews,
  getDetailData,
  getHomeNews,
  getSiteNewsDetail,
  getLatestNews,
} from "./extraReducer";

const initialState = {
  loadingNews: true,
  newsData: [],
  newsHomeData: [],
  detailData: {},
  loadingDetail: true,

  siteNewsDetail: {},
  siteNewsDetailLoading: true,

  latestNews: [],
  latestNewsLoading: true,

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
        state.detailData = action.payload;
      })
      .addCase(getDetailData.rejected, (state, action) => {
        state.loadingDetail = false;
        state.error = action.error.message;
      });

    // Get home news
    builder
      .addCase(getHomeNews.pending, (state) => {
        state.loadingNews = true;
      })
      .addCase(getHomeNews.fulfilled, (state, action) => {
        state.loadingNews = false;
        state.newsHomeData = action.payload[0].data;
      })
      .addCase(getHomeNews.rejected, (state, action) => {
        state.loadingNews = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getLatestNews.pending, (state) => {
        state.latestNewsLoading = true;
      })
      .addCase(getLatestNews.fulfilled, (state, action) => {
        state.latestNewsLoading = false;
        state.latestNews = action.payload.data;
      })
      .addCase(getLatestNews.rejected, (state, action) => {
        state.latestNewsLoading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getSiteNewsDetail.pending, (state) => {
        state.siteNewsDetailLoading = true;
      })
      .addCase(getSiteNewsDetail.fulfilled, (state, action) => {
        state.siteNewsDetailLoading = false;
        state.siteNewsDetail = action.payload;
      })
      .addCase(getSiteNewsDetail.rejected, (state, action) => {
        state.siteNewsDetailLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
