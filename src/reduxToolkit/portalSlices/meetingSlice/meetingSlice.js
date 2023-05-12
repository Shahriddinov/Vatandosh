import { createSlice } from "@reduxjs/toolkit";

import {
  getMeetingAll,
  getMeetingOne,
  getMeetingPage,
  meetingCreate,
} from "./extraReducer";

const initialState = {
  meetingsLoading: true,
  meetingsData: [],
  meetingsNumber: null,
  meetingOneLoading: true,
  meetingOnedata: [],
  pageLoading: true,
  pageData: [],
  createMeetingLoading: true,
  createMeetingData: [],
  status: "idle",
  error: null,
};

const meetingSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Get meetings
    builder
      .addCase(getMeetingAll.pending, (state, { meta }) => {
        if (meta.arg.eventType) {
          state.meetingsData = [];
        }
        state.meetingsLoading = true;
      })
      .addCase(getMeetingAll.fulfilled, (state, { payload }) => {
        state.meetingsLoading = false;
        state.meetingsData = [...state.meetingsData, ...payload.meetings];
        console.log(payload);
      })
      .addCase(getMeetingAll.rejected, (state, action) => {
        state.meetingsLoading = false;
        state.error = action.error.message;
      });

    // Get one meeting
    builder
      .addCase(getMeetingOne.pending, (state) => {
        state.meetingOneLoading = true;
      })
      .addCase(getMeetingOne.fulfilled, (state, action) => {
        state.meetingOneLoading = false;
        state.meetingOnedata = action.payload;
      })
      .addCase(getMeetingOne.rejected, (state, action) => {
        state.meetingOneLoading = false;
        state.error = action.error.message;
      });

    // Get meeting page
    builder
      .addCase(getMeetingPage.pending, (state) => {
        state.pageLoading = true;
      })
      .addCase(getMeetingPage.fulfilled, (state, action) => {
        state.pageLoading = false;
        state.pageData = action.payload;
      })
      .addCase(getMeetingPage.rejected, (state, action) => {
        state.pageLoading = false;
        state.error = action.error.message;
      });

    // Create meeting
    builder
      .addCase(meetingCreate.pending, (state) => {
        state.createMeetingLoading = true;
        state.status = "idle";
      })
      .addCase(meetingCreate.fulfilled, (state, action) => {
        state.createMeetingLoading = false;
        state.createMeetingData = action.payload;
        state.status = "succeeded";
      })
      .addCase(meetingCreate.rejected, (state, action) => {
        state.createMeetingLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeStatus } = meetingSlice.actions;

export default meetingSlice.reducer;
