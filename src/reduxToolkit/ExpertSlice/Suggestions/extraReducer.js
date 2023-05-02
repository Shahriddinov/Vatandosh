import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERT_SUGGESTIONS } from "../../../services/api/utils";

export const getSuggestions = createAsyncThunk("suggestion/get", async () => {
  return await axios.get(GET_EXPERT_SUGGESTIONS).then((res) => res.data);
});
