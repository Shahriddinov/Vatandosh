import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EMPLOYMENT } from "../../../services/api/utils";

export const getExpertOneEmployment = createAsyncThunk(
  "get/expert/one/employment",
  async (id) => {
    return await axios.get(`${GET_EMPLOYMENT}/${id}`).then((res) => res.data);
  }
);
