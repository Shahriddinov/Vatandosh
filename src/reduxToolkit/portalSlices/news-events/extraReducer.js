import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_PORTAL_ALL_EVENTS,
  GET_PORTAL_ALL_NEWS,
} from "../../../services/api/utils";

export const portalNews = createAsyncThunk(
  "get/portal-news",
  async ({ paginate = 6, page = 1 }) => {
    return await axios({
      url: GET_PORTAL_ALL_NEWS,
      params: {
        paginate,
        page,
      },
    }).then((res) => res.data);
  }
);

export const portalEvents = createAsyncThunk(
  "get/portal-events",
  async ({ per_page = 6, page = 1 }) => {
    return await axios({
      url: GET_PORTAL_ALL_EVENTS,
      params: {
        per_page,
        page,
      },
    }).then((res) => res.data);
  }
);
