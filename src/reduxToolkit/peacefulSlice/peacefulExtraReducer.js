import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_INTERACTIVE_SERVICES_URL,
  GET_PEACEFUL_URL,
  GET_PROJECTS_MENU,
} from "../../services/api/utils";

export const getPeaceful = createAsyncThunk("get/getPeaceful", async () => {
  return await axios({
    method: "GET",
    url: GET_PEACEFUL_URL,
  }).then((res) => res.data);
});

export const getInteractiveServices = createAsyncThunk(
  "get/interactiveServices",
  async () => {
    return await axios({
      method: "GET",
      url: GET_INTERACTIVE_SERVICES_URL,
    }).then((res) => res.data);
  }
);

export const getProjectsMenu = createAsyncThunk(
  "get/projectsMenu",
  async () => {
    return await axios.get(GET_PROJECTS_MENU).then((res) => res.data);
  }
);
