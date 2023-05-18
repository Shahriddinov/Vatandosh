import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_EXPERT,
  GET_EXPERTS,
  GET_EXPERT_COUNT,
  GET_EXPERT_FILTER,
  GET_EXPERT_PAGE,
} from "../../../services/api/utils";

export const getExperts = createAsyncThunk("experts/get", async (page) => {
  return await axios
    .get(page ? `${GET_EXPERTS}?page=${page}` : GET_EXPERTS)
    .then((res) => res.data);
});

export const getExpert = createAsyncThunk("expert/get", async (id) => {
  return await axios.get(`${GET_EXPERT}/${id}`).then((res) => res.data);
});

export const getExpertCount = createAsyncThunk("getExpertCount", async () => {
  return await axios.get(GET_EXPERT_COUNT).then((res) => res.data);
});

export const getExpertPage = createAsyncThunk("getExpertPage", async () => {
  return await axios.get(GET_EXPERT_PAGE).then((res) => res.data);
});

export const getExpertFilter = createAsyncThunk(
  "getExpertFilterCountry",
  async ({ countryId, specialization, perPage = 12 }) => {
    console.log(specialization);
    console.log(countryId);
    return await axios({
      url: GET_EXPERT_FILTER + perPage,
      method: "GET",
      params: {
        countryId: countryId === "all" ? "" : countryId,
        specialization: specialization === "all" ? "" : specialization,
      },
    }).then((res) => res.data);
  }
);
