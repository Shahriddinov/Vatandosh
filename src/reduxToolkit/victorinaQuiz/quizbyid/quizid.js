import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import { GET_VICTORINA_BYID } from "../../../services/api/utils";

export const getByIdQuizz = createAsyncThunk("quizbyid/get", async ({ id }) => {
  return await axios
    .get(`${GET_VICTORINA_BYID}/${id}`)
    .then((res) => res?.data);
});
