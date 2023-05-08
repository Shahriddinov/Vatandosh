import { VICTORINA_YOUTUBE } from "../../services/api/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

export const sendVictorinaFile = createAsyncThunk(
  "test",
  async ({ id, data }) => {
    console.log(data);
    return await axios
      .post(`${VICTORINA_YOUTUBE}/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res?.data);
  }
);
