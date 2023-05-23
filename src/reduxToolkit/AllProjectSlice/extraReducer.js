import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_ABOUT_ALL_PROJECTS,
  GET_ALL_PROJECTS,
} from "../../services/api/utils";

export const getAllProjects = createAsyncThunk("get/all/projects", async () => {
  return await axios.get(GET_ALL_PROJECTS).then((res) => res.data);
});

export const aboutAllProjects = createAsyncThunk(
  "get/about/projects",
  async () => {
    return await axios.get(GET_ABOUT_ALL_PROJECTS).then((res) => res.data);
  }
);
