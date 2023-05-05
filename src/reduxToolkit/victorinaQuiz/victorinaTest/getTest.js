import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_VICTORINA_TEST } from "../../../services/api/utils";
import axios from "../../../services/api/axios";

export const getTestQuizz = createAsyncThunk("test/get", async () => {
  return await axios.get(GET_VICTORINA_TEST).then((res) => res?.data);
});
