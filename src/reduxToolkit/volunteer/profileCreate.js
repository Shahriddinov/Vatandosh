import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { VOLUNTEER_PROFILE } from "../../services/api/utils";

export const volunterProfile = createAsyncThunk(
  "volunterprofile",
  async (payload) => {
    return await axios
      .post(VOLUNTEER_PROFILE, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
);
