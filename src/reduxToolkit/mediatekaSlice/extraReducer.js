import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  GET_MEDIA_IMAGES,
  GET_MEDIA_IMAGES_MENUS,
  GET_MEDIA_VIDOES,
  GET_MEDIA_VIDOES_MENUS,
  GET_VIDOES_PAGINATION,
  GET_IMAGES_PAGINATION,
  baseUrl,
} from "../../services/api/utils";

// Get videos menus
export const getVideosMenus = createAsyncThunk("videosMenus/get", async () => {
  return await axios.get(GET_MEDIA_VIDOES_MENUS).then((res) => res.data);
});

// Get videos pagination
export const getMediaPagination = createAsyncThunk(
  "getMediaPagination/get",
  async ({ typeUrl, page }) => {
    const count = typeUrl === "videos" ? 6 : 16;
    return await axios
      .get(`${baseUrl}/mediateka-${typeUrl}/page/${count}?page=${page}`)
      .then((res) => res.data);
  }
);

// Get images menus
export const getImagesMenus = createAsyncThunk("imagesMenus/get", async () => {
  return await axios.get(GET_MEDIA_IMAGES_MENUS).then((res) => res.data);
});

// Get images pagination
export const getImagesPagination = createAsyncThunk(
  "imagesPagination/get",
  async (payload) => {
    return await axios
      .get(`${GET_IMAGES_PAGINATION}/16?page=${payload}`)
      .then((res) => res.data);
  }
);
