import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import {
  GET_CITIES,
  GET_COMMUNITY_ALL_EVENT,
  GET_COMMUNITY_ALL_PAGINATION,
  GET_COMMUNITY_ALL_REGIONS,
  GET_COMMUNITY_EVENT_DETAIL,
  GET_COMMUNITY_HOMEPAGE_DATA,
  GET_LOCATION,
  GET_LOCATION_ONE,
  POST_COMMUNITY_CREATE,
  POST_COMMUNITY_IMAGE,
} from "../../../services/api/utils";

export const getAllEvents = createAsyncThunk(
  "getAllEvents",
  async ({ per_page, page }) => {
    return await axios({
      url: GET_COMMUNITY_ALL_EVENT,
      params: {
        per_page,
        page,
      },
    }).then((res) => res.data);
  }
);

export const getEventsDetail = createAsyncThunk(
  "getEventsDetail",
  async (eventId) => {
    return await axios({
      url: GET_COMMUNITY_EVENT_DETAIL + eventId,
    }).then((res) => res.data);
  }
);

export const getLocation = createAsyncThunk("getLocation", async () => {
  return await axios.get(GET_LOCATION).then((res) => res.data);
});

export const getLocationOne = createAsyncThunk("getLocationOne", async (id) => {
  return await axios.get(`${GET_LOCATION_ONE}${id}`).then((res) => res.data);
});

export const getAllRegions = createAsyncThunk("getAllRegions", async () => {
  return await axios.get(GET_COMMUNITY_ALL_REGIONS).then((res) => res.data);
});

export const getCountryCities = createAsyncThunk(
  "getCountryCities",
  async ({ location_id }) => {
    return await axios({
      url: GET_CITIES,
      params: {
        location_id,
      },
    }).then((res) => res.data);
  }
);

export const getAllCommunity = createAsyncThunk(
  "getAllCommunity",
  async (payload) => {
    const { page, region_id, per_page } = payload;
    return await axios({
      url: GET_COMMUNITY_ALL_PAGINATION,
      method: "GET",
      params: {
        page,
        region_id,
        per_page,
      },
    }).then((res) => res.data);
  }
);

export const getCommunityHomePage = createAsyncThunk(
  "getCommunityHomePage",
  async (payload) => {
    return await axios.get(GET_COMMUNITY_HOMEPAGE_DATA).then((res) => res.data);
  }
);

export const postCommunityCreate = createAsyncThunk(
  "postCommunityCreate",
  async (data) => {
    return await axios({
      url: POST_COMMUNITY_CREATE,
      data,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }).then((res) => res.data);
  }
);

export const postCommunityImage = createAsyncThunk(
  "postCommunityImage",
  async (data) => {
    return await axios({
      url: POST_COMMUNITY_IMAGE,
      method: "POST",
      data: data.image,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        accept: "*/*",
      },
    }).then((res) => res.data);
  }
);
