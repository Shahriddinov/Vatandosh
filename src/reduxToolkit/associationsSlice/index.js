import { createSlice } from "@reduxjs/toolkit";
import {
  getAssociations,
  getAssociationsAbout,
  getAssociationsCategory,
} from "./associationsAsyncThunk";

const initialState = {
  associationData: [],
  associationCategoryData: [],
  associationLoading: true,
  associationCategoryLoading: true,
  error: null,

  aboutLoading: true,
  aboutData: [],
  aboutError: null,
};

const associationSlice = createSlice({
  name: "association",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAssociations.pending, (state) => {
        state.associationLoading = true;
        state.error = null;
      })
      .addCase(getAssociations.fulfilled, (state, { payload }) => {
        state.associationLoading = false;
        state.associationData = payload;
      })
      .addCase(getAssociations.rejected, (state, { error }) => {
        state.associationLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAssociationsCategory.pending, (state) => {
        state.associationCategoryLoading = true;
        state.error = null;
      })
      .addCase(getAssociationsCategory.fulfilled, (state, { payload }) => {
        state.associationCategoryLoading = false;
        state.associationCategoryData = payload;
      })
      .addCase(getAssociationsCategory.rejected, (state, { error }) => {
        state.associationCategoryLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAssociationsAbout.pending, (state) => {
        state.aboutLoading = true;
      })
      .addCase(getAssociationsAbout.fulfilled, (state, action) => {
        state.aboutLoading = false;
        state.aboutData = action.payload;
      })
      .addCase(getAssociationsAbout.rejected, (state, action) => {
        state.aboutLoading = false;
        state.aboutError = action.error.message;
      });

    builder.addDefaultCase((state) => state);
  },
});

export default associationSlice.reducer;
