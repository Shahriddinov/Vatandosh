import { createSlice } from "@reduxjs/toolkit";
import {
  createExpertEmployment,
  deleteExpertEducation,
  deleteExpertEmployment,
  getExpertEducation,
  getExpertEmployment,
  getExpertRegister,
  getExpertRegisterMenu,
  getExpertSpecialization,
  postExpertEducation,
  updateExpertEducation,
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

  employment: [],
  employmentLoading: true,
  employmentError: null,

  employmentCreateSuccess: null,
  employmentCreateData: null,
  employmentCreateLoading: null,

  educationDeleteStatus: null,

  educationCreateStatus: null,

  educationUpdateStatus: null,
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
          title: "Barcha mutaxassislar",
          label: "Barcha mutaxassislar",
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
  },
});

export default expertRegisterSlice.reducer;
