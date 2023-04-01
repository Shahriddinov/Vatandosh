import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../services/api/utils";
import axios from "axios";

export const getInf = createAsyncThunk("getInf", async (payload) => {
  return await axios.get(`${baseUrl}/${payload}`).then((res) => res.data);
});

export const getPagination = createAsyncThunk("getPagination", async ({ reqUrlName, page }) => {
  return await axios.get(`${baseUrl}/${reqUrlName}/page/6?page=${page}`).then((res) => res.data)
})