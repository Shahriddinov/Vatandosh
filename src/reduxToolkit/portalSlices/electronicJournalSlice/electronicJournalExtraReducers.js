import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../src/services/api/axios";
import {
  GET_MAGAZINE_ABOUT,
  GET_MAGAZINE_ALL,
  GET_MAGAZINE_MENU,
  GET_MAGAZINE_ONE,
  GET_MAGAZINE_ONE_ABOUT,
  GET_MAGAZINE_ONE_MENU,
  GET_MAGAZINE_ONE_TIPS,
  GET_MAGAZINE_TIPS,
} from "../../../services/api/utils";

//=========================================GET_MAGAZINE_ABOUT================================
export const magazineGetAbout = createAsyncThunk(
  "magazineGetAbout",
  async () => {
    return await axios.get(GET_MAGAZINE_ABOUT).then((res) => res.data);
  }
);

//=========================================GET_MAGAZINE_ONE_ABOUT================================
export const magazineGetOneAbout = createAsyncThunk(
  "magazineGetOneAbout",
  async ({ aboutEMagazine }) => {
    return await axios({
      url: GET_MAGAZINE_ONE_ABOUT,
      method: "GET",
      params: {
        aboutEMagazine,
      },
    }).then((res) => res.data);
  }
);

//=========================================GET_MAGAZINE_ALL================================
export const magazineGetAll = createAsyncThunk("magazineGetAll", async () => {
  return await axios.get(GET_MAGAZINE_ALL).then((res) => res.data);
});

//=========================================GET_MAGAZINE_ONE================================
export const magazineGetOne = createAsyncThunk(
  "magazineGetOne",
  async ({ id }) => {
    return await axios.get(GET_MAGAZINE_ONE + id).then((res) => res.data);
  }
);

//=========================================GET_MAGAZINE_MENU================================
export const magazineGetMenu = createAsyncThunk("magazineGetMenu", async () => {
  return await axios.get(GET_MAGAZINE_MENU).then((res) => res.data);
});

//=========================================GET_MAGAZINE_ONE_MENU================================
export const magazineGetOneMenu = createAsyncThunk(
  "magazineGetOneMenu",
  async ({ id }) => {
    return await axios.get(GET_MAGAZINE_ONE_MENU + id).then((res) => res.data);
  }
);

//=========================================GET_MAGAZINE_TIPS================================
export const magazineGetTips = createAsyncThunk("magazineGetTips", async () => {
  return await axios.get(GET_MAGAZINE_TIPS).then((res) => res.data);
});

//=========================================GET_MAGAZINE_ONE_TIPS================================
export const magazineGetOneTips = createAsyncThunk(
  "magazineGetOneTips",
  async ({ id }) => {
    return await axios.get(GET_MAGAZINE_ONE_TIPS + id).then((res) => res.data);
  }
);
