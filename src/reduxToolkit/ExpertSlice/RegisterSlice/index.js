import { createSlice } from "@reduxjs/toolkit";
import {
  getExpertEducation,
  getExpertEmployment,
  getExpertRegisterMenu,
  getExpertSpecialization,
} from "./extraReducer";

const initialState = {
  loading: true,
  error: null,
  menu: [],

  education: [],
  educationLoading: true,
  educationError: null,

  specialization: [],
  specializationLoading: true,
  specializationError: null,

  employment: [],
  employmentLoading: true,
  employmentError: null,
};

const expertRegisterSlice = createSlice({
  name: "Get expert register menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register
      .addCase(getExpertRegisterMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpertRegisterMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getExpertRegisterMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // register education
    builder
      .addCase(getExpertEducation.pending, (state) => {
        state.educationLoading = true;
      })
      .addCase(getExpertEducation.fulfilled, (state, action) => {
        state.educationLoading = false;
        state.education = action.payload;
      })
      .addCase(getExpertEducation.rejected, (state, action) => {
        state.educationLoading = false;
        state.educationError = action.error.message;
      });

    // register specialization
    builder
      .addCase(getExpertSpecialization.pending, (state) => {
        state.specializationLoading = true;
      })
      .addCase(getExpertSpecialization.fulfilled, (state, action) => {
        state.specializationLoading = false;
        state.specialization = action.payload;
      })
      .addCase(getExpertSpecialization.rejected, (state, action) => {
        state.specializationLoading = false;
        state.specializationError = action.error.message;
      });

    // employment
    builder
      .addCase(getExpertEmployment.pending, (state) => {
        state.employmentLoading = true;
      })
      .addCase(getExpertEmployment.fulfilled, (state, action) => {
        state.employmentLoading = false;
        state.employment = action.payload;
      })
      .addCase(getExpertEmployment.rejected, (state, action) => {
        state.employmentLoading = false;
        state.employmentError = action.error.message;
      });
  },
});

export default expertRegisterSlice.reducer;
