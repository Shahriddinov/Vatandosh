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
  async (payload) => {
    return await axios
      .post(CREATE_MEETING, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  }
);

export const getMeetingAll = createAsyncThunk("getMeetingAll", async () => {
  return await axios.get(GET_MEETINGS).then((res) => res.data);
});

export const getMeetingOne = createAsyncThunk("getMeetingOne", async (id) => {
  return await axios.get(`${GET_MEETING_BY_ID}${id}`).then((res) => res.data);
});

export const getMeetingPage = createAsyncThunk("getMeetingPage", async (id) => {
  return await axios.delete(GET_MEETING_PAGE).then((res) => res.data);
});
