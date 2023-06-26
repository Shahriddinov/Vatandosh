import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";

import {
  createExpertEmployment,
  deleteExpertEducation,
  deleteExpertEmployment,
  deleteExpertScientific,
  getExpertEducation,
  getExpertEmployment,
  getExpertRegister,
  getExpertRegisterMenu,
  getExpertScientific,
  getExpertSpecialization,
  postExpertEducation,
  postExpertRegister,
  postExpertScientific,
  updateExpertEducation,
  updateExpertEmployment,
} from "./extraReducer";

const initialState = {
  loading: true,
  error: null,
  menu: [],

  userLoading: true,
  user: null,
  userError: null,

  education: [],
  educationLoading: true,
  educationError: null,

  specialization: [],
  specializationLoading: true,
  specializationError: null,

  expertRegister: [],
  expertRegisterLoading: true,
  expertRegisterError: null,

  employment: [],
  employmentLoading: true,
  employmentError: null,

  employmentCreateSuccess: null,
  employmentUpdateSuccess: null,
  employmentCreateData: null,
  employmentCreateLoading: null,

  educationDeleteStatus: null,

  educationCreateStatus: null,

  educationUpdateStatus: null,

  scientificData: [],
  scientificDataLoading: true,
  scientificDataError: null,

  scientificDataCreateAndUpdateStatus: null,
  scientificDataCreateAndUpdateError: null,

  scientificDeleteStatus: null,
  scientificDeleteLoading: true,
};

const expertRegisterSlice = createSlice({
  name: "Get expert register menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder
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

    builder
      .addCase(getExpertRegister.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(getExpertRegister.fulfilled, (state, action) => {
        state.userLoading = false;
        state.user = action.payload;
      })
      .addCase(getExpertRegister.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.error.message;
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
        const obj = {
          id: "all",
          title: i18next.t("expert.all_specialists"),
          label: i18next.t("expert.all_specialists"),
          created_at: "2023-05-05T13:03:07.000000Z",
          updated_at: "2023-05-05T13:03:07.000000Z",
        };
        const changeData = action.payload.map((el) => ({
          ...el,
          label: el.title,
        }));
        state.specialization = [obj, ...changeData];
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

    builder
      .addCase(createExpertEmployment.pending, (state) => {
        state.employmentCreateLoading = true;
        state.employmentCreateSuccess = null;
        state.employmentDeleteStatus = null;
        state.employmentUpdateSuccess = null;
      })
      .addCase(createExpertEmployment.fulfilled, (state, action) => {
        state.employmentCreateLoading = false;
        state.employmentCreateData = action.payload;
        state.employmentCreateSuccess = "success";
      })
      .addCase(createExpertEmployment.rejected, (state, action) => {
        state.employmentCreateLoading = false;
        state.employmentError = action.error.message;
        state.employmentCreateSuccess = "error";
      });

    builder
      .addCase(deleteExpertEmployment.pending, (state) => {
        state.employmentDeleteStatus = null;
        state.employmentCreateSuccess = null;
        state.employmentUpdateSuccess = null;
      })
      .addCase(deleteExpertEmployment.fulfilled, (state, action) => {
        state.employmentDeleteStatus = "success";
      })
      .addCase(deleteExpertEmployment.rejected, (state, action) => {
        state.employmentDeleteStatus = "error";
      });

    builder
      .addCase(deleteExpertEducation.pending, (state) => {
        state.educationDeleteStatus = null;
        state.educationCreateStatus = null;
        state.educationUpdateStatus = null;
      })
      .addCase(deleteExpertEducation.fulfilled, (state, action) => {
        state.educationDeleteStatus = "success";
      })
      .addCase(deleteExpertEducation.rejected, (state, action) => {
        state.educationDeleteStatus = "error";
      });

    builder
      .addCase(updateExpertEducation.pending, (state) => {
        state.educationDeleteStatus = null;
        state.educationCreateStatus = null;
        state.educationUpdateStatus = null;
      })
      .addCase(updateExpertEducation.fulfilled, (state, action) => {
        state.educationUpdateStatus = "success";
      })
      .addCase(updateExpertEducation.rejected, (state, action) => {
        state.educationUpdateStatus = "error";
      });

    builder
      .addCase(postExpertEducation.pending, (state) => {
        state.educationDeleteStatus = null;
        state.educationCreateStatus = null;
        state.educationUpdateStatus = null;
      })
      .addCase(postExpertEducation.fulfilled, (state, action) => {
        state.educationCreateStatus = "success";
      })
      .addCase(postExpertEducation.rejected, (state, action) => {
        state.educationCreateStatus = "error";
      });

    builder
      .addCase(getExpertScientific.pending, (state) => {
        state.scientificDataLoading = true;
        state.scientificDataError = null;
        state.scientificDataCreateAndUpdateStatus = null;
      })
      .addCase(getExpertScientific.fulfilled, (state, { payload }) => {
        state.scientificDataLoading = false;
        state.scientificData = payload;
      })
      .addCase(getExpertScientific.rejected, (state, { error }) => {
        state.scientificDataLoading = false;
        state.scientificDataError = error.message;
      });

    builder
      .addCase(postExpertScientific.pending, (state) => {
        state.scientificDataCreateAndUpdateStatus = null;
        state.scientificDeleteStatus = null;
        state.scientificDataError = null;
      })
      .addCase(postExpertScientific.fulfilled, (state, { payload }) => {
        state.scientificDataCreateAndUpdateStatus = "success";
      })
      .addCase(postExpertScientific.rejected, (state, { error }) => {
        state.scientificDataCreateAndUpdateStatus = "error";
        state.scientificDataCreateAndUpdateError = error.message;
      });

    builder
      .addCase(deleteExpertScientific.pending, (state) => {
        state.scientificDeleteLoading = true;
        state.scientificDeleteStatus = null;
        state.scientificDataCreateAndUpdateStatus = null;
      })
      .addCase(deleteExpertScientific.fulfilled, (state, { payload }) => {
        state.scientificDeleteStatus = "success";
      })
      .addCase(deleteExpertScientific.rejected, (state, { error }) => {
        state.scientificDeleteStatus = "error";
      });

    builder
      .addCase(updateExpertEmployment.pending, (state) => {
        state.employmentUpdateSuccess = null;
        state.employmentCreateSuccess = null;
        state.employmentDeleteStatus = null;
      })
      .addCase(updateExpertEmployment.fulfilled, (state, { payload }) => {
        state.employmentUpdateSuccess = "success";
      })
      .addCase(updateExpertEmployment.rejected, (state, { error }) => {
        state.employmentUpdateSuccess = "error";
      });
  },
});

export default expertRegisterSlice.reducer;
