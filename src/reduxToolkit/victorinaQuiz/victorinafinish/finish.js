import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import { GET_VICTORINA_FINISH } from "../../../services/api/utils";

export const getQuizzFinish = createAsyncThunk(
  "get/portalNews",
  async ({ status, year }) => {
    return await axios({
      url: GET_VICTORINA_FINISH,
      params: {
        status,
        year,
      },
    }).then((res) => res.data);
  }
);
