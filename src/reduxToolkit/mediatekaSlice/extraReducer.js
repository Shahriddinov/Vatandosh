import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  GET_MEDIA_IMAGES_MENUS,
  GET_MEDIA_VIDOES_MENUS,
  baseUrl,
} from "../../services/api/utils";

// Get videos menus
export const getVideosMenus = createAsyncThunk("videosMenus/get", async () => {
  return await axios.get(GET_MEDIA_VIDOES_MENUS).then((res) => res.data);
});

// Get images menus
export const getImagesMenus = createAsyncThunk("imagesMenus/get", async () => {
  return await axios.get(GET_MEDIA_IMAGES_MENUS).then((res) => res.data);
});

// Get media pagination
export const getMediaPagination = createAsyncThunk(
  "getMediaPagination/get",
  async ({ typeUrl, page, categoryId }) => {
    const count = typeUrl === "videos" ? 6 : 16;
    const id = categoryId === 0 ? "" : `/${categoryId}`;
    return await axios
      .get(`${baseUrl}/mediateka-${typeUrl}/page/${count}${id}?page=${page}`)
      .then((res) => res.data);
  }
);
