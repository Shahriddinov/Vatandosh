import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import { VICTORINA_MEDIA_CREATE } from "../../services/api/utils";

export const mediaVictorinaImage = createAsyncThunk(
  "victorina-media",
  async (data) => {
    console.log(data);
    return await axios({
      url: VICTORINA_MEDIA_CREATE,
      method: "POST",
      data: data.image,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        accept: "*/*",
      },
    }).then((res) => res.data);
  }
);