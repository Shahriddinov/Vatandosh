import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_ASSOCIATIONS,
  GET_ASSOCIATIONS_CATEGORY
} from "../../services/api/utils";

export const getAssociations = createAsyncThunk(
  "get/associationsData",
  async () => {
    return await axios.get(GET_ASSOCIATIONS).then((res) => res.data);
  }
);

export const getAssociationsCategory = createAsyncThunk(
  "get/associationsCategory",
  async () => {
    return await axios.get(GET_ASSOCIATIONS_CATEGORY).then((res) => res.data);
  }
);
