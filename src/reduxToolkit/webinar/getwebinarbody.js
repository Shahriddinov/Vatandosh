import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_WEBINAR_BODY } from "../../services/api/utils";

export const getWebinarBody = createAsyncThunk(
  "webinar/get",
  async () => {
    return await axios
      .get(`${GET_WEBINAR_BODY}/meetings?type=webinar`)
      .then((res) => res?.data);
  }
);
