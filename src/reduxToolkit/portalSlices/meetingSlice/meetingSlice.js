import { createSlice } from "@reduxjs/toolkit";

import {
  getMeetingAll,
  getMeetingCount,
  getMeetingOne,
  getMeetingPage,
  meetingCreate,
} from "./extraReducer";

const initialState = {
  meetingsLoading: true,
  meetingsData: [],
  meetingsError: null,

  meetingsCountLoading: true,
  meetingsCount: 0,
  meetingsCountError: null,

  meetingOneLoading: true,
  meetingOnedata: [],
  meetingsOneDataError: null,

  pageLoading: true,
  pageData: [],
  meetingsPageDataError: null,

  createMeetingLoading: true,
  createMeetingData: [],
  meetingsCreateMeetingDataError: null,

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
        if (meta.arg.eventType || meta.arg.pageType) {
          state.meetingsData = [];
        }
        state.meetingsLoading = true;
        state.meetingsError = null;
      })
      .addCase(getMeetingAll.fulfilled, (state, { payload }) => {
        state.meetingsLoading = false;
        state.meetingsData = [...state.meetingsData, ...payload.meetings];
      })
      .addCase(getMeetingAll.rejected, (state, action) => {
        state.meetingsLoading = false;
        state.meetingsError = action.error.message;
      });

    // Get meetings count
    builder
      .addCase(getMeetingCount.pending, (state) => {
        state.meetingsCountLoading = true;
        state.meetingsCountError = null;
      })
      .addCase(getMeetingCount.fulfilled, (state, { payload }) => {
        state.meetingsCountLoading = false;
        state.meetingsCount = payload.count;
      })
      .addCase(getMeetingCount.rejected, (state, action) => {
        state.meetingsCountLoading = false;
        state.meetingsCountError = action.error.message;
      });

    // Get one meeting
    builder
      .addCase(getMeetingOne.pending, (state) => {
        state.meetingOneLoading = true;
        state.meetingsOneDataError = null;
      })
      .addCase(getMeetingOne.fulfilled, (state, action) => {
        state.meetingOneLoading = false;
        state.meetingOnedata = action.payload;
      })
      .addCase(getMeetingOne.rejected, (state, action) => {
        state.meetingOneLoading = false;
        state.meetingsOneDataError = action.error.message;
      });

    // Get meeting page
    builder
      .addCase(getMeetingPage.pending, (state) => {
        state.pageLoading = true;
        state.meetingsPageDataError = null;
      })
      .addCase(getMeetingPage.fulfilled, (state, action) => {
        state.pageLoading = false;
        state.pageData = action.payload;
      })
      .addCase(getMeetingPage.rejected, (state, action) => {
        state.pageLoading = false;
        state.meetingsPageDataError = action.error.message;
      });

    // Create meeting
    builder
      .addCase(meetingCreate.pending, (state) => {
        state.createMeetingLoading = true;
        state.status = "idle";
        state.meetingsCreateMeetingDataError = null;
      })
      .addCase(meetingCreate.fulfilled, (state, action) => {
        state.createMeetingLoading = false;
        state.createMeetingData = action.payload;
        state.status = "succeeded";
      })
      .addCase(meetingCreate.rejected, (state, action) => {
        state.createMeetingLoading = false;
        state.meetingsCreateMeetingDataError = action.error.message;
      });
  },
});

export const { changeStatus } = meetingSlice.actions;

export default meetingSlice.reducer;
