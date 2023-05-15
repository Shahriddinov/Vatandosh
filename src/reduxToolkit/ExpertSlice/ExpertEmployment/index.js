import { createSlice } from "@reduxjs/toolkit";
import { getExpertOneEmployment } from "./extraReducer";

const initialState = {
  employment: [],
  employmentLoading: true,
  error: null,
};

const getEmployment = createSlice({
  name: "get employment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpertOneEmployment.pending, (state) => {
        state.employmentLoading = true;
      })
      .addCase(getExpertOneEmployment.fulfilled, (state, action) => {
        state.employmentLoading = false;
        state.employment = action.payload;
      })
      .addCase(getExpertOneEmployment.rejected, (state, action) => {
        state.employmentLoading = false;
        state.error = action.error.message;
      });
  },
});

export default getEmployment.reducer;
