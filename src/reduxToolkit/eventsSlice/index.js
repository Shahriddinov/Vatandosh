import { createSlice } from "@reduxjs/toolkit";

import { getEvents, getEventsHome } from "./extraReducer";

const initialState = {
  loading: true,
  eventsData: [],
  eventLoading: true,
  homeEventData: [],
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.eventsData = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Get home events
    builder
      .addCase(getEventsHome.pending, (state) => {
        state.eventLoading = true;
      })
      .addCase(getEventsHome.fulfilled, (state, action) => {
        state.eventLoading = false;
        state.homeEventData = action.payload;
      })
      .addCase(getEventsHome.rejected, (state, action) => {
        state.eventLoading = false;
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;
