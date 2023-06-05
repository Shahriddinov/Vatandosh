import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_VOLUNTEER_USER } from "../../services/api/utils";

export const getVolunteerShowUser = createAsyncThunk(
  "getVolunteerShowUser",
  async () => {
    return await axios.get(`${GET_VOLUNTEER_USER}`).then((res) => res.data);
  }
);
