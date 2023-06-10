import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_SITE_EVENTONE, GTE_SITE_NEWSONE } from "../../services/api/utils";
import axios from "../../services/api/axios";

export const getWebSiteEvent = createAsyncThunk(
  "websiteEvent",
  async ({ id }) => {
    return await axios.get(`${GET_SITE_EVENTONE}/${id}`).then((res) => res.data);
  }
);
