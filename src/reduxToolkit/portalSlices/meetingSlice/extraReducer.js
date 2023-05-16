import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";

import {
  GET_MEETINGS,
  GET_MEETING_BY_ID,
  GET_MEETING_PAGE,
  CREATE_MEETING,
} from "../../../services/api/utils";

export const meetingCreate = createAsyncThunk(
  "meetingCreate",
  async ({ data, id }) => {
    return await axios
      .post(`${CREATE_MEETING}${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  }
);

export const getMeetingAll = createAsyncThunk(
  "getMeetingAll",
  async (props) => {
    return await axios({
      url: GET_MEETINGS,
      method: "GET",
      params: {
        page: props?.page,
        type: props?.eventType,
        is_end: props?.is_end,
      },
    }).then((res) => res.data);
  }
);

export const getMeetingCount = createAsyncThunk("getMeetingCount", async () => {
  return await axios({
    url: GET_MEETINGS,
    method: "GET",
  }).then((res) => res.data);
});

export const getMeetingOne = createAsyncThunk("getMeetingOne", async (id) => {
  return await axios.get(`${GET_MEETING_BY_ID}${id}`).then((res) => res.data);
});

export const getMeetingPage = createAsyncThunk("getMeetingPage", async () => {
  return await axios.get(GET_MEETING_PAGE).then((res) => res.data);
});
