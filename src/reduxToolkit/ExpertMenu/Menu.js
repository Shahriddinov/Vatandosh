import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERT_MENU } from "../../services/api/utils";

export const getExpertMenu = createAsyncThunk("menu/get", async () => {
  return await axios.get(GET_EXPERT_MENU).then((res) => res?.data);
});
