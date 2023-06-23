import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DELETE_EXPERT_ACTIVITY,
  GET_EXPERT_ACTIVITY,
  GET_EXPERT_ACTIVITY_DETAIL,
  SEND_EXPERT_ACTIVITY,
  UPDATE_EXPERT_ACTIVITY,
} from "../../../services/api/utils";

const user = JSON.parse(localStorage.getItem("user"));

export const getExpertActivity = createAsyncThunk(
  "get expert activity",
  async () => {
    return await axios
      .get(GET_EXPERT_ACTIVITY + user?.user_id?.id)
      .then((res) => res.data);
  }
);

export const postExpertActivity = createAsyncThunk(
  "post expert activity",
  async (payload) => {
    return await axios
      .post(SEND_EXPERT_ACTIVITY, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  }
);

export const updateExpertActivity = createAsyncThunk(
  "update expert activity",
  async (payload) => {
    const activity_id = payload.id;
    delete payload.id;
    return await axios.post(UPDATE_EXPERT_ACTIVITY + activity_id, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
);

export const deleteExpertActivity = createAsyncThunk(
  "delete expert activity",
  async (activity_id) => {
    return await axios
      .delete(DELETE_EXPERT_ACTIVITY + activity_id)
      .then((res) => res.data);
  }
);

export const getExpertActivityOne = createAsyncThunk(
  "getExpertActivityOne",
  async ({ id }) => {
    return await axios
      .get(GET_EXPERT_ACTIVITY_DETAIL + id)
      .then((res) => res.data);
  }
);

//getExpertActivityOne
