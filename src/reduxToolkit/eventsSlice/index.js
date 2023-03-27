import { createSlice } from "@reduxjs/toolkit";

import { getEvents } from "./extraReducer";

const initialState = {
  loading: true,
  eventsData: [],
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
        state.eventsData = action.payload.data;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;
