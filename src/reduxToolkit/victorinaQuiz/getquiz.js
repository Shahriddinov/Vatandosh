import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VICTORINA_QUIZ } from "../../services/api/utils";

export const getQuizz = createAsyncThunk(
  "get/portalNews",
  async ({ status }) => {
    return await axios({
      url: GET_VICTORINA_QUIZ,
      params: {
        status,
      },
    }).then((res) => res.data);
  }
);
