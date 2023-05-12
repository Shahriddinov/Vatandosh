import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../../src/services/api/axios";
import { GET_PORTAL_NEWS } from "../../../services/api/utils";

const initialState = {
  news: [],
  loading: true,
  error: null,
};

export const getPortalNews = createAsyncThunk(
  "get/PortalNews",
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

const portalNewsSlice = createSlice({
  name: "portalNewsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPortalNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPortalNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.news = payload;
      })
      .addCase(getPortalNews.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default portalNewsSlice.reducer;
