import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import { GET_NOTIFICATION } from "../../services/api/utils";

const initialState = {
  open: null,
  notificationData: {},
  notificationDataLoading: true,
  error: true,
};

export const getNotification = createAsyncThunk(
  "getNotification",
  async ({ per_page = 10, page = 1 }) => {
    return axios({
      url: GET_NOTIFICATION,
      params: {
        per_page,
        page,
      },
    }).then((res) => res.data);
  }
);

export const getOneNotification = createAsyncThunk(
  "getOneNotification",
  async (id) => {
    return axios({
      url: GET_NOTIFICATION + "/" + id,
    }).then((res) => res.data);
  }
);
const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {
    openNotification: (state, { payload }) => {
      state.open = payload;
    },
    closeNotification: (state, { payload }) => {
      state.open = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotification.pending, (state) => {
        state.notificationDataLoading = true;
        state.error = null;
      })
      .addCase(getNotification.fulfilled, (state, { payload }) => {
        state.notificationData = payload.notifications;
        state.notificationDataLoading = false;
      })
      .addCase(getNotification.rejected, (state, { error }) => {
        state.error = error.message;
        state.notificationDataLoading = false;
      });

    builder
      .addCase(getOneNotification.pending, (state) => {
        state.notificationDataLoading = true;
        state.error = null;
      })
      .addCase(getOneNotification.fulfilled, (state, { payload }) => {
        state.notificationData = payload;
        state.notificationDataLoading = false;
      })
      .addCase(getOneNotification.rejected, (state, { error }) => {
        state.error = error.message;
        state.notificationDataLoading = false;
      });
  },
});

export const { openNotification, closeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
