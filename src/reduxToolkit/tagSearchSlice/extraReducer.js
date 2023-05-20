import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  GET_LATEST_TAG,
  GET_POPULAR_TAG,
  GET_TAG_RESULTS,
} from "../../services/api/utils";

export const getTagSearch = createAsyncThunk(
  "tagResult/get",
  async ({ tag, page }) => {
    return await axios
      .get(`${GET_TAG_RESULTS}/${tag}/16?page=${page}`)
      .then((res) => res.data);
  }
);

export const getLatestTag = createAsyncThunk("latestTag/get", async (page) => {
  return await axios
    .get(`${GET_LATEST_TAG}/16?page=${page}`)
    .then((res) => res.data);
});

export const getPopularTag = createAsyncThunk(
  "popularTag/get",
  async (page) => {
    return await axios
      .get(`${GET_POPULAR_TAG}/16?page=${page}`)
      .then((res) => res.data);
  }
);
