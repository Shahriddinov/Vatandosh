import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_VICTORINA_TEST,
  VICTORINA_YOUTUBE,
} from "../../../services/api/utils";
import axios from "../../../services/api/axios";

export const getTestQuizz = createAsyncThunk("test/get", async ({ id }) => {
  return await axios
    .get(`${GET_VICTORINA_TEST}/${id}`)
    .then((res) => res?.data);
});

export const sendVictorinaTest = createAsyncThunk(
  "test",
  async ({ id, data }) => {
    return await axios
      .post(`${VICTORINA_YOUTUBE}/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res?.data);
  }
);
