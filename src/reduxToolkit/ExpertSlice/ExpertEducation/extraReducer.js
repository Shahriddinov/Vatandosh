import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EDUCATION } from "../../../services/api/utils";

export const getExpertOneEducation = createAsyncThunk(
  "getOneExpertEducation",
  async (id) => {
    return await axios.get(`${GET_EDUCATION}/${id}`).then((res) => res.data);
  }
);
