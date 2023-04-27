import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import {
  GET_COMMUNITY_ALL_PAGINATION,
  GET_COMMUNITY_ALL_REGIONS,
  GET_COMMUNITY_HOMEPAGE_DATA,
  GET_LOCATION,
} from "../../../services/api/utils";

export const getLocation = createAsyncThunk("getLocation", async () => {
  return await axios.get(GET_LOCATION).then((res) => res.data);
});

export const getAllRegions = createAsyncThunk("getAllRegions", async () => {
  return await axios.get(GET_COMMUNITY_ALL_REGIONS).then((res) => res.data);
});

export const getAllCommunity = createAsyncThunk(
  "getAllCommunity",
  async (payload) => {
    return await axios
      .get(GET_COMMUNITY_ALL_PAGINATION + payload)
      .then((res) => res.data);
  }
);

export const getCommunityHomePage = createAsyncThunk(
  "getCommunityHomePage",
  async (payload) => {
    return await axios.get(GET_COMMUNITY_HOMEPAGE_DATA).then((res) => res.data);
  }
);
