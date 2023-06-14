import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../src/services/api/axios";
import {
  DELETE_EXPERT_SUGGESTIONS,
  GET_EXPERT_SUGGESTIONS,
  SEND_EXPERT_SUGGESTION,
} from "../../../services/api/utils";

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
        },
      })
      .then((res) => res.data);
  }
);
export const deleteSuggestions = createAsyncThunk(
  "suggestions/delete",
  async (id) => {
    return await axios
      .delete(DELETE_EXPERT_SUGGESTIONS + id)
      .then((res) => res.data);
  }
);
