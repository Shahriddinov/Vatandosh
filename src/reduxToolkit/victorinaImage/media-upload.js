import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import { VICTORINA_MEDIA_CREATE } from "../../services/api/utils";

export const mediaVictorina = createAsyncThunk(
  "mediaupload",
  async (payload) => {
    return await axios
      .post(VICTORINA_MEDIA_CREATE, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
);
