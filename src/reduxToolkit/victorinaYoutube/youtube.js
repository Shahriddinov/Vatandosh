import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { VICTORINA_YOUTUBE } from "../../services/api/utils";

export const sendVictorinaYoutube = createAsyncThunk(
  "youtube",
  async ({ id, data }) => {
    return await axios
      .post(`${VICTORINA_YOUTUBE}/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
);
