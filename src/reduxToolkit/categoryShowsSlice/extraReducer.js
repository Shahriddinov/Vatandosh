import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_NEWS_URL } from "../../services/api/utils";

export const getCategoryShows = createAsyncThunk("category-shows/getCategories", async () => {
  return await axios.get(GET_NEWS_URL).then((res) => res.data);
});
