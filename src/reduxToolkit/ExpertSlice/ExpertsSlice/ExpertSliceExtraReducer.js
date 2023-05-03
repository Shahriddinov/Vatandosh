import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERT, GET_EXPERTS } from "../../../services/api/utils";

export const getExperts = createAsyncThunk("experts/get", async (page) => {
  return await axios
    .get(page ? `${GET_EXPERTS}?page=${page}` : GET_EXPERTS)
    .then((res) => res.data);
});

export const getExpert = createAsyncThunk("expert/get", async (id) => {
  return await axios.get(`${GET_EXPERT}/${id}`).then((res) => res.data);
});
