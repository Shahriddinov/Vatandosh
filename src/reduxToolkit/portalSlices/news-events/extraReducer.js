import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_PORTAL_ALL_EVENTS,
  GET_PORTAL_ALL_NEWS,
} from "../../../services/api/utils";

export const portalNews = createAsyncThunk("get/portal-news", async () => {
  return await axios.get(GET_PORTAL_ALL_NEWS).then((res) => res.data);
});

export const portalEvents = createAsyncThunk("get/portal-events", async () => {
  return await axios.get(GET_PORTAL_ALL_EVENTS).then((res) => res.data);
});
