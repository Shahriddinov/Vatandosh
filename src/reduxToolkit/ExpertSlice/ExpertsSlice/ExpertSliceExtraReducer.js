import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERTS } from "../../../services/api/utils";

export const getExperts = createAsyncThunk("experts/get", async () => {
  return await axios.get(GET_EXPERTS).then((res) => res.data);
});
