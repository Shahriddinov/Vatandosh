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
    console.log(props);
    return await axios({
      url: GET_MEETINGS,
      method: "GET",
      params: {
        page: props?.page,
        type: props?.eventType,
      },
    }).then((res) => res.data);
  }
);

export const getMeetingOne = createAsyncThunk("getMeetingOne", async (id) => {
  return await axios.get(`${GET_MEETING_BY_ID}${id}`).then((res) => res.data);
});

export const getMeetingPage = createAsyncThunk("getMeetingPage", async (id) => {
  return await axios.delete(GET_MEETING_PAGE).then((res) => res.data);
});
