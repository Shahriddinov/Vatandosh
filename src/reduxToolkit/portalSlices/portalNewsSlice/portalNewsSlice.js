import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../../src/services/api/axios";
import {
  GET_PORTAL_NEWS,
  GET_PORTAL_NEWS_DETAIL,
} from "../../../services/api/utils";

const initialState = {
  news: [],
  loading: true,
  oneNews: {},
  oneNewsLoading: true,
  error: null,
};

export const getPortalNews = createAsyncThunk(
  "get/portalNews",
  async ({ type, per_page, page }) => {
    return await axios({
      url: GET_PORTAL_NEWS,
      params: {
        type,
        per_page,
        page,
      },
    }).then((res) => res.data);
  }
);

export const getPortalOneNews = createAsyncThunk(
  "get/portalOneNews",
  async (id) => {
    return await axios({
      url: GET_PORTAL_NEWS_DETAIL + id,
    }).then((res) => res.data);
  }
);

const portalNewsSlice = createSlice({
  name: "portalNewsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPortalNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPortalNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.news = payload;
      })
      .addCase(getPortalNews.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });

    builder
      .addCase(getPortalOneNews.pending, (state) => {
        state.oneNewsLoading = true;
        state.error = null;
      })
      .addCase(getPortalOneNews.fulfilled, (state, { payload }) => {
        state.oneNewsLoading = false;
        state.oneNews = payload;
      })
      .addCase(getPortalOneNews.rejected, (state, { error }) => {
        state.oneNewsLoading = false;
        state.error = error.message;
      });
  },
});

export default portalNewsSlice.reducer;
