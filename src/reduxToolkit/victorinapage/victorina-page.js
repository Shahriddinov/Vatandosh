import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VICTORINA_PAGE } from "../../services/api/utils";

export const getQuizPage = createAsyncThunk("page/get", async () => {
  return await axios.get(GET_VICTORINA_PAGE).then((res) => res?.data);
});
