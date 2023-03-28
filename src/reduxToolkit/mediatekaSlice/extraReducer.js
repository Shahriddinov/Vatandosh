import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  GET_MEDIA_IMAGES,
  GET_MEDIA_IMAGES_MENUS,
  GET_MEDIA_VIDOES,
  GET_MEDIA_VIDOES_MENUS,
} from "../../services/api/utils";

// Get videos
export const getVideos = createAsyncThunk("videos/get", async () => {
  return await axios.get(GET_MEDIA_VIDOES).then((res) => res.data);
});

// Get videos menus
export const getVideosMenus = createAsyncThunk("videosMenus/get", async () => {
  return await axios.get(GET_MEDIA_VIDOES_MENUS).then((res) => res.data);
});

// Get images
export const getImages = createAsyncThunk("images/get", async () => {
  return await axios.get(GET_MEDIA_IMAGES).then((res) => res.data);
});

// Get images menus
export const getImagesMenus = createAsyncThunk("imagesMenus/get", async () => {
  return await axios.get(GET_MEDIA_IMAGES_MENUS).then((res) => res.data);
});
