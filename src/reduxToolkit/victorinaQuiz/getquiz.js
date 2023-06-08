import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VICTORINA_QUIZ } from "../../services/api/utils";

export const getQuizz = createAsyncThunk(
  "get/getQuizz",
  async ({ status, is_me }) => {
    return await axios({
      url: GET_VICTORINA_QUIZ,
      params: {
        status,
        is_me: is_me ? is_me : null,
      },
    }).then((res) => res.data);
  }
);
