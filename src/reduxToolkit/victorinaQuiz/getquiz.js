import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VICTORINA_QUIZ } from "../../services/api/utils";

export const getQuizz = createAsyncThunk("quiz/get", async () => {
  return await axios.get(GET_VICTORINA_QUIZ).then((res) => res?.data);
});
