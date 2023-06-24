import { createSlice } from "@reduxjs/toolkit";
import {
  getExpertActivity,
  getExpertActivityOne,
  postExpertActivity,
} from "./extraReducer";

const initialState = {
  data: [],
  loading: true,
  oneData: {},
  oneDataLoading: true,
  error: null,

  postExportActivitySuccess: null,
};

const expertActivity = createSlice({
  name: "expertActivity",
  initialState,
  reducers: {
    changePostSuccess: (state) => {
      state.postExportActivitySuccess = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpertActivity.pending, (state) => {
        state.loading = true;
        state.postExportActivitySuccess = null;
      })
      .addCase(getExpertActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getExpertActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getExpertActivityOne.pending, (state) => {
        state.oneDataLoading = true;
        state.postExportActivitySuccess = null;
      })
      .addCase(getExpertActivityOne.fulfilled, (state, action) => {
        state.oneDataLoading = false;
        state.oneData = action.payload;
      })
      .addCase(getExpertActivityOne.rejected, (state, action) => {
        state.oneDataLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(postExpertActivity.pending, (state) => {
        state.postExportActivitySuccess = null;
      })
      .addCase(postExpertActivity.fulfilled, (state, action) => {
        state.postExportActivitySuccess = "success";
      })
      .addCase(postExpertActivity.rejected, (state, action) => {
        state.postExportActivitySuccess = "error";
        state.error = action.error.message;
      });
    //getExpertActivityOne
  },
});

export const { changePostSuccess } = expertActivity.actions;

export default expertActivity.reducer;
