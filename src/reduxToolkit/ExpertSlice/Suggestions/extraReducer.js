import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_EXPERT_SUGGESTIONS,
  SEND_EXPERT_SUGGESTION,
} from "../../../services/api/utils";

const token = localStorage.getItem("token");

export const getSuggestions = createAsyncThunk("suggestion/get", async () => {
  return await axios.get(GET_EXPERT_SUGGESTIONS).then((res) => res.data);
});

export const postSuggestions = createAsyncThunk(
  "suggestion/post",
  async (payload) => {
    return await axios
      .post(SEND_EXPERT_SUGGESTION, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
