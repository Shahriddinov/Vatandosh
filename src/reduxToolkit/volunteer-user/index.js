import { createSlice } from "@reduxjs/toolkit";
import { getVolunteerShowUser } from "./volunteer-user";

const initialState = {
  loading: true,
  volunteerShowOneData: [],
  error: null,
};

const volunteerShowUserSlice = createSlice({
  name: "getVolunteerShowUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVolunteerShowUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVolunteerShowUser.fulfilled, (state, action) => {
        state.loading = false;
        state.volunteerShowOneData = action.payload;
      })
      .addCase(getVolunteerShowUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default volunteerShowUserSlice.reducer;
