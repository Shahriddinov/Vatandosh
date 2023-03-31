import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_COLUMNS_MENU,
  GET_SINGLE_PAGINATION,
  baseUrl,
} from "../../services/api/utils";

export const getCompatriotsMenu = createAsyncThunk(
  "get/compatriots-menu",
  async (payload) => {
    return await axios({
      method: "GET",
      url: `${baseUrl}/info${payload}`,
    }).then((res) => res.data);
  }
);

export const getColumnMenu = createAsyncThunk("get/column-menu", async () => {
  return await axios({
    method: "GET",
    url: GET_COLUMNS_MENU,
  }).then((res) => res.data);
});

export const getSinglePagination = createAsyncThunk(
  "get/eventsSize",
  async ({ type, page, reqUrl, categoryId }) => {
    return await axios({
      method: "GET",
      url:
        GET_SINGLE_PAGINATION +
        reqUrl +
        `/page/${type === "compatriots" ? 6 : 8}${
          categoryId ? `/${categoryId}` : ""
        }?page=${page}`,
    }).then((res) => res.data);
  }
);
