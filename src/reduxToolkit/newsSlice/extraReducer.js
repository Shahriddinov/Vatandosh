import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl, GET_NEWS_URL } from "../../services/api/utils";

export const getNews = createAsyncThunk("news/getNews", async () => {
  return await axios.get(GET_NEWS_URL).then((res) => res.data);
});

export const getHomeNews = createAsyncThunk("news/getHomeNews", async () => {
  return await axios
    .get(`${GET_NEWS_URL}/page/6?page=1`)
    .then((res) => res.data);
});

export const getDetailData = createAsyncThunk(
  "news/getOne",
  async ({ page, id }) => {
    return await axios.get(`${baseUrl}/${page}/${id}`).then((res) => res.data);
  }
);
