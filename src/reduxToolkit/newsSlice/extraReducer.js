import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../src/services/api/axios";

import { baseUrl, GET_NEWS_URL, portalBaseUrl } from "../../services/api/utils";

export const getNews = createAsyncThunk("news/getNews", async () => {
  return await axios.get(GET_NEWS_URL).then((res) => res.data);
});

export const getHomeNews = createAsyncThunk(
  "news/getHomeNews",
  async ({ page }) => {
    return await axios
      .get(`${GET_NEWS_URL}/page/6?page=${page}`)
      .then((res) => res.data);
  }
);

export const getDetailData = createAsyncThunk(
  "news/getOne",
  async ({ page, id }) => {
    return await axios.get(`${baseUrl}/${page}/${id}`).then((res) => res.data);
  }
);

export const getSiteNewsDetail = createAsyncThunk(
  "news/getSiteNewsDetail",
  async ({ category, type, id }) => {
    return await axios({
      url: `${portalBaseUrl}/${category}/${type}/${id}`,
      method: "GET",
    }).then((res) => res.data);
  }
);

export const getLatestNews = createAsyncThunk(
  "news/getLatestNews",
  async ({ url }) => {
    return await axios({
      url: `${portalBaseUrl}/${url}`,
      method: "GET",
    }).then((res) => res.data);
  }
);
