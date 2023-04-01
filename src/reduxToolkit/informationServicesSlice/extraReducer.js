import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../services/api/utils";
import axios from "axios";

export const getInf = createAsyncThunk("getInf", async (payload) => {
  return await axios.get(`${baseUrl}/${payload}`).then((res) => res.data);
});
