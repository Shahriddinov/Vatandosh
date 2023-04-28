import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_ABOUTS } from "../../services/api/utils";

export const getAbout = createAsyncThunk("abouts/get", async () => {
  return await axios.get(GET_ABOUTS).then((res) => res.data);
});
