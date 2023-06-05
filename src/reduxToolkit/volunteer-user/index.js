import { getVolunteerShowUser } from "./volunteer-user";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volunteerShowOneLoading: true,
  volunteerShowOneData: [],
  status: "idle",
  error: null,
};

const volunteerShowUserSlice = createSlice({
  name: "show-user",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Get one volunteer
    builder
      .addCase(getVolunteerShowUser.pending, (state) => {
        state.volunteerShowOneLoading = true;
      })
      .addCase(getVolunteerShowUser.fulfilled, (state, action) => {
        state.volunteerShowOneLoading = false;
        state.volunteerShowOneData = action.payload;
      })
      .addCase(getVolunteerShowUser.rejected, (state, action) => {
        state.volunteerShowOneLoading = false;
        state.error = action.error.message;
      });
  },
});

export default volunteerShowUserSlice.reducer;
