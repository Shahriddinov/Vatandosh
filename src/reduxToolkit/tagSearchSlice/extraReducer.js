import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_TAG_RESULTS } from "../../services/api/utils";

export const getTagSearch = createAsyncThunk(
  "tagResult/get",
  async ({ tag, page }) => {
    return await axios
      .get(`${GET_TAG_RESULTS}/${tag}/16?page=${page}`)
      .then((res) => res.data);
  }
);
