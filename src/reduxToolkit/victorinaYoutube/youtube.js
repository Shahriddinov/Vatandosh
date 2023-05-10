import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { VICTORINA_YOUTUBE } from "../../services/api/utils";

export const sendVictorinaYoutube = createAsyncThunk(
  "youtube",
  async ({ id, dataYoutube }) => {
    console.log(id, dataYoutube);
    return await axios
      .post(`${VICTORINA_YOUTUBE}/${id}`, dataYoutube, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
);
