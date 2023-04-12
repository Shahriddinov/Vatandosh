import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_SEARCH_RESULTS } from "../../services/api/utils";

export const getSearchResults = createAsyncThunk(
  "get/searchResults",
  async (payload) => {
    return await axios
      .get(`${GET_SEARCH_RESULTS}/${payload.search}/12?page=${payload.page}`)
      .then((res) => res.data);
  }
);
