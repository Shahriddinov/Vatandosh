import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import {
  VOLUNTEER_CREATE,
  VOLUNTEER_UPDATE,
  VOLUNTEER_SHOW_USER,
  VOLUNTEER_SHOW_USER_BY_ID,
  VOLUNTEER_DELETE
} from "../../services/api/utils"

export const volunteerCreate = createAsyncThunk(
  "volunteerCreate",
  async (payload) => {
    return await axios
      .post(VOLUNTEER_CREATE, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
  }
);

export const volunteerUpdate = createAsyncThunk(
  "volunteerUpdate",
  async (payload) => {
    return await axios
      .post(VOLUNTEER_UPDATE, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
  }
);

export const getVolunteerAll = createAsyncThunk("getVolunteerAll", async () => {
  return await axios.get(VOLUNTEER_SHOW_USER).then((res) => res.data);
});

export const getVolunteerOne = createAsyncThunk("getVolunteerOne", async (id) => {
  return await axios.get(`${VOLUNTEER_SHOW_USER_BY_ID}${id}`).then((res) => res.data);
});

export const deleteVolunteerOne = createAsyncThunk("deleteVolunteerOne", async (id) => {
  return await axios.delete(`${VOLUNTEER_DELETE}${id}`).then((res) => res.data);
});