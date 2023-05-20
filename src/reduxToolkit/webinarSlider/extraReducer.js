import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_WEBINAR_SLIDER } from "../../services/api/utils";

export const getWebinarSlider = createAsyncThunk(
  "getWebinarSlider",
  async () => {
    return await axios.get(GET_WEBINAR_SLIDER).then((res) => res.data);
  }
);
