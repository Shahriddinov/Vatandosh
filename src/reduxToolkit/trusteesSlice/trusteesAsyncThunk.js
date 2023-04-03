import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_ALL_TRUSTEES_URL,
  GET_TRUSTEES_URL,
} from "../../services/api/utils";
import { async } from "q";

export const getAllTrustees = createAsyncThunk("get/AllTrustees", async () => {
  return await axios.get(GET_ALL_TRUSTEES_URL).then((res) => res.data);
});

export const getPaginationTrusts = createAsyncThunk(
  "get/PaginationTrusts",
  async (payload) => {
    const count = payload * 9;
    return await axios.get(GET_TRUSTEES_URL + count).then((res) => res.data);
  }
);
