import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_EXPERT_SUGGESTIONS_MENU } from "../../services/api/utils";

export const getSuggestionMenuData = createAsyncThunk(
  "suggestion/get",
  async (page) => {
    return await axios
      .get(`${GET_EXPERT_SUGGESTIONS_MENU}?paginate=${page}`)
      .then((res) => res?.data);
  }
);
