import { createSlice } from "@reduxjs/toolkit";
import { cabinetExpertActivityGet } from "./cabinetExtraActions";

const initialState = {
  expertActivityData: [],
  expertActivityDataLoading: true,
  expertActivityError: null,

  expertVolunteerData: [],
  expertVolunteerDataLoading: true,
  expertVolunteerDataError: null,
};

const cabinetSlice = createSlice({
  name: "cabinetSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(cabinetExpertActivityGet.pending, (state) => {
        state.expertActivityDataLoading = true;
        state.expertActivityError = null;
      })
      .addCase(cabinetExpertActivityGet.fulfilled, (state, { payload }) => {
        state.expertActivityDataLoading = false;
        state.expertActivityData = payload;
      })
      .addCase(cabinetExpertActivityGet.rejected, (state, { error }) => {
        state.expertActivityDataLoading = false;
        state.expertActivityError = error.message;
      });
  },
});

export default cabinetSlice.reducer;
