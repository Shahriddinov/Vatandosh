import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import {
  VOLUNTEER_CREATE,
  VOLUNTEER_UPDATE,
  VOLUNTEER_SHOW_USER,
  VOLUNTEER_BY_COUNTRY,
  VOLUNTEER_BY_CITY,
  VOLUNTEER_SHOW_USER_BY_ID,
  VOLUNTEER_DELETE,
  GET_VOLUNTEER_ACTIVITY,
  UPDATE_VOLUNTEER_ACTIVITY,
  DELETE_VOLUNTEER_ACTIVITY,
  VOLUNTEER_CITY,
  GET_VOLUNTEER_ACTIVITY_ONE,
} from "../../services/api/utils";

const token = localStorage.getItem("token");

export const volunteerCreate = createAsyncThunk(
  "volunteerCreate",
  async (payload) => {
    return await axios
      .post(VOLUNTEER_CREATE, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
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
      .then((res) => res.data);
  }
);

export const getVolunteerAll = createAsyncThunk(
  "getVolunteerAll",
  async (page) => {
    return await axios
      .get(`${VOLUNTEER_SHOW_USER}${page}`)
      .then((res) => res.data);
  }
);

export const getVolunteerByCountry = createAsyncThunk(
  "getVolunteerByCountry",
  async (country) => {
    return await axios
      .get(`${VOLUNTEER_BY_COUNTRY}${country}`)
      .then((res) => res.data);
  }
);

export const getVolunteerFilter = createAsyncThunk(
  "getVolunteerByCity",
  async ({ city, country, perPage = 12 }) => {
    return await axios({
      url: VOLUNTEER_BY_CITY + perPage,
      params: {
        country: country === "all" ? "" : country,
        city,
      },
    }).then((res) => res.data);
  }
);

export const getVolunteerOne = createAsyncThunk(
  "getVolunteerOne",
  async (id) => {
    return await axios
      .get(`${VOLUNTEER_SHOW_USER_BY_ID}${id}`)
      .then((res) => res.data);
  }
);

export const getVolunteerCity = createAsyncThunk(
  "getVolunteerCity",
  async (id) => {
    return await axios.get(VOLUNTEER_CITY).then((res) => res.data);
  }
);

export const deleteVolunteerOne = createAsyncThunk(
  "deleteVolunteerOne",
  async (id) => {
    return await axios
      .delete(`${VOLUNTEER_DELETE}${id}`)
      .then((res) => res.data);
  }
);

export const getVolunteerActivity = createAsyncThunk(
  "getVolunteerActivity",
  async () => {
    return await axios.get(GET_VOLUNTEER_ACTIVITY).then((res) => res.data);
  }
);

export const getVolunteerActivityOne = createAsyncThunk(
  "getVolunteerActivityOne",
  async ({ id }) => {
    return await axios
      .get(`${GET_VOLUNTEER_ACTIVITY_ONE}/${id}`)
      .then((res) => res.data);
  }
);

export const updateVolunteerActivity = createAsyncThunk(
  "updateVolunteerActivity",
  async (payload) => {
    const id = payload.id;
    delete payload.id;
    if (!payload.images.length) delete payload.images;
    return await axios
      .post(`${UPDATE_VOLUNTEER_ACTIVITY}/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);

export const updateVolunteerActivity2 = createAsyncThunk(
  "updateVolunteerActivity",
  async ({ volunteerId, formData }) => {
    return await axios
      .post(`${UPDATE_VOLUNTEER_ACTIVITY}/${volunteerId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);

export const deleteVolunteerActivity = createAsyncThunk(
  "deleteVolunteerActivity",
  async (id) => {
    return await axios
      .delete(`${DELETE_VOLUNTEER_ACTIVITY}/${id}`)
      .then((res) => res.data);
  }
);
