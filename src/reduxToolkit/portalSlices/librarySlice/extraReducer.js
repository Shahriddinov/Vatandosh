import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import {
  GET_LIBRARY_ALL,
  GET_LIBRARY_ONE,
  GET_LIBRARY_SLIDER,
} from "../../../services/api/utils";

export const getLibraryAll = createAsyncThunk(
  "getLibraryAll",
  async ({ count, page }) => {
    return await axios({
      url: GET_LIBRARY_ALL + count,
      params: {
        page,
      },
    }).then((res) => res.data);
  }
);

export const getLibraryOne = createAsyncThunk("getLibraryOne", async (id) => {
  return await axios.get(`${GET_LIBRARY_ONE}${id}`).then((res) => res.data);
});

export const getLibrarySlider = createAsyncThunk(
  "getLibrarySlider",
  async (id) => {
    return await axios.get(GET_LIBRARY_SLIDER).then((res) => res.data);
  }
);
