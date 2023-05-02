import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import {
  GET_LIBRARY_ALL,
  GET_LIBRARY_ONE
} from "../../../services/api/utils";

export const getLibraryAll = createAsyncThunk("getLibraryAll", async (page) => {
  return await axios.get(`${GET_LIBRARY_ALL}${page}`).then((res) => res.data);
});

export const getLibraryOne = createAsyncThunk("getLibraryOne", async (id) => {
  return await axios.get(`${GET_LIBRARY_ONE}${id}`).then((res) => res.data);
});
