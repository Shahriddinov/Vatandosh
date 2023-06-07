import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_SITE_NEWSONE } from "../../services/api/utils";
import axios from "../../services/api/axios";

export const getWebSiteNews = createAsyncThunk(
  "websiteNews",
  async ({ id }) => {
    return await axios.get(`${GET_SITE_NEWSONE}/${id}`).then((res) => res.data);
  }
);
