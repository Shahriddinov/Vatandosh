import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_TAG_RESULTS } from "../../services/api/utils";

export const getTagSearch = createAsyncThunk(
  "tagResult/get",
  async (payload) => {
    return await axios
      .get(`${GET_TAG_RESULTS}/${payload}`, {
        headers: {
          "Accept-Language": { payload },
        },
      })
      .then((res) => res.data);
  }
);
