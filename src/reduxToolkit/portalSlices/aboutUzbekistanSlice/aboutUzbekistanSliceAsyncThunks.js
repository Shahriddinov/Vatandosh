import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import {
  GET_ALL_ABOUT_UZB_MENU,
  GET_ALL_CITY,
  GET_ALL_CITY_CONTENT,
  GET_ALL_CITY_VIDEO,
  GET_ALL_GALLERY,
  GET_ALL_SIGHTSEEING,
  GET_CITY_3D_ALL,
  GET_CITY_3D_ONE,
  GET_ONE_GALLERY,
  GET_SINGLE_ABOUT_UZB_MENU,
  GET_SINGLE_CITY,
  GET_SINGLE_CITY_VIDEO,
  GET_SINGLE_SIGHTSEEING,
} from "../../../services/api/utils";

//<====================================GET_ALL_ABOUT_UZB_MENU============================>
export const getAllAboutUzbMenu = createAsyncThunk(
  "get/AllAboutUzbMenu",
  async () => {
    return await axios.get(GET_ALL_ABOUT_UZB_MENU).then((res) => res.data);
  }
);

//<====================================GET_SINGLE_ABOUT_UZB_MENU============================>
export const getSingleAboutUzbMenu = createAsyncThunk(
  "get/SingleAboutUzbMenu",
  async (id) => {
    return await axios
      .get(GET_SINGLE_ABOUT_UZB_MENU + id)
      .then((res) => res.data);
  }
);

//<====================================GET_CITY_3D_ALL============================>
export const getAllCity3D = createAsyncThunk("get/getAllCity3D", async () => {
  return await axios.get(GET_CITY_3D_ALL).then((res) => res.data);
});

//<====================================GET_CITY_3D_ONE============================>
export const getOneCity3D = createAsyncThunk("get/getOneCity3D", async (id) => {
  return await axios.get(GET_CITY_3D_ONE + id).then((res) => res.data);
});

//<====================================GET_ALL_CITY_CONTENT============================>
export const getAllCityContent = createAsyncThunk(
  "get/getAllCityContent",
  async () => {
    return await axios.get(GET_ALL_CITY_CONTENT).then((res) => res.data);
  }
);

//<====================================GET_ALL_CITY============================>
export const getAllCity = createAsyncThunk("get/getAllCity", async () => {
  return await axios.get(GET_ALL_CITY).then((res) => res.data);
});

//<====================================GET_SINGLE_CITY============================>
export const getSingleCity = createAsyncThunk(
  "get/getSingleCity",
  async (id) => {
    return await axios.get(GET_SINGLE_CITY + id).then((res) => res.data);
  }
);

//<====================================GET_ALL_GALLERY============================>
export const getAllGallery = createAsyncThunk("get/getAllGallery", async () => {
  return await axios.get(GET_ALL_GALLERY).then((res) => res.data);
});

//<====================================GET_ONE_GALLERY============================>
export const getOneGallery = createAsyncThunk(
  "get/getOneGallery",
  async (id) => {
    return await axios.get(GET_ONE_GALLERY + id).then((res) => res.data);
  }
);

//<====================================GET_ALL_CITY_VIDEO============================>
export const getAllCityVideo = createAsyncThunk(
  "get/getAllCityVideo",
  async () => {
    return await axios.get(GET_ALL_CITY_VIDEO).then((res) => res.data);
  }
);

//<====================================GET_SINGLE_CITY_VIDEO============================>
export const getSingleCityVideo = createAsyncThunk(
  "get/getSingleCityVideo",
  async (id) => {
    return await axios.get(GET_SINGLE_CITY_VIDEO + id).then((res) => res.data);
  }
);

//<====================================GET_ALL_SIGHTSEEING============================>
export const getAllSightseeing = createAsyncThunk(
  "get/getAllSightseeing",
  async ({ paginate, city }) => {
    // console.log(paginate, city);
    return await axios({
      url: GET_ALL_SIGHTSEEING,
      method: "GET",
      params: {
        paginate,
        city,
      },
    }).then((res) => res.data);
  }
);

//<====================================GET_SINGLE_SIGHTSEEING============================>
export const getSingleSightseeing = createAsyncThunk(
  "get/getSingleSightseeing",
  async (id) => {
    return await axios.get(GET_SINGLE_SIGHTSEEING + id).then((res) => res.data);
  }
);
