import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_SLIDER } from "../../services/api/utils";

export const getSlider = createAsyncThunk("slider/get", async () => {
  return await axios.get(GET_SLIDER).then((res) => res.data);
});
