import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERT_USER } from "../../services/api/utils";

export const getExpertUser = createAsyncThunk("expert/get", async () => {
  return await axios.get(GET_EXPERT_USER).then((res) => res.data);
});
