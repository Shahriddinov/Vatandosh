import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../src/services/api/axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY_DATA_NEWS,
  GET_MAP_DATA_ASSOCIATION_COUNT,
  GET_MAP_DATA_NEWS_COUNT,
  GET_MAP_DATA_URL,
} from "../../services/api/utils";

export const mapGetData = createAsyncThunk("map/getData", async (payload) => {
  return axios.get(GET_MAP_DATA_URL + payload).then((res) => res.data);
});

export const getCountries = createAsyncThunk("map/countries", async () => {
  return axios.get(GET_COUNTRIES).then((res) => res.data);
});

export const getCountriesNews = createAsyncThunk(
  "map/getCountriesNews",
  async () => {
    return axios.get(GET_MAP_DATA_NEWS_COUNT).then((res) => res.data);
  }
);

export const getCountriesNewsData = createAsyncThunk(
  "map/getCountriesNewsData",
  async (id) => {
    return axios.get(GET_COUNTRY_DATA_NEWS + id).then((res) => res.data);
  }
);

export const getCountriesAssociationData = createAsyncThunk(
  "map/getCountriesAssociationData",
  async () => {
    return axios.get(GET_MAP_DATA_ASSOCIATION_COUNT).then((res) => res.data);
  }
);
