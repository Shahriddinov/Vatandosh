import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VOLUNTEER_USER } from "../../services/api/utils";

export const getVolunteerShowUser = createAsyncThunk(
  "getVolunteerShowUser",
  async ({ id }) => {
    return await axios
      .get(`${GET_VOLUNTEER_USER}/${id}`)
      .then((res) => res.data);
  }
);
