import { createSlice } from "@reduxjs/toolkit";
import { portalEvents, portalNews } from "./extraReducer";

const initialState = {
  news: [],
  newsLoading: true,
  newsError: null,

  events: [],
  eventsLoading: true,
  eventsError: null,
};

const portalAllNewsSlice = createSlice({
  name: "portal all news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(portalNews.pending, (state) => {
        state.newsLoading = true;
      })
      .addCase(portalNews.fulfilled, (state, action) => {
        state.newsLoading = false;
        state.news = action.payload;
      })
      .addCase(portalNews.rejected, (state, action) => {
        state.newsLoading = false;
        state.newsError = action.error.message;
      });

    builder
      .addCase(portalEvents.pending, (state) => {
        state.eventsLoading = true;
      })
      .addCase(portalEvents.fulfilled, (state, action) => {
        state.eventsLoading = false;
        state.events = action.payload;
      })
      .addCase(portalEvents.rejected, (state, action) => {
        state.eventsLoading = false;
        state.eventsError = action.error.message;
      });
  },
});

export default portalAllNewsSlice.reducer;
