import { createSlice } from "@reduxjs/toolkit";
import {
  getExpert,
  getExpertAssociation,
  getExpertCount,
  getExpertFilter,
  getExpertFilterCountry,
  getExpertPage,
  getExperts,
} from "./ExpertSliceExtraReducer";

const initialState = {
  loading: true,
  expertData: [],
  expertCount: [],
  expertCountLoading: true,
  expertPage: [],
  expertPageLoading: true,
  expert: {},
  expertLoading: true,

  expertAssociationData: [],
  expertAssociationLoading: true,
  expertAssociationError: null,

  error: null,
};

const expertsSlice = createSlice({
  name: "experts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExperts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExperts.fulfilled, (state, action) => {
        state.loading = false;
        state.expertData = action.payload;
      })
      .addCase(getExperts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpert.pending, (state) => {
        state.expertLoading = true;
      })
      .addCase(getExpert.fulfilled, (state, action) => {
        state.expertLoading = false;
        state.expert = action.payload;
      })
      .addCase(getExpert.rejected, (state, action) => {
        state.expertLoading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpertCount.pending, (state) => {
        state.expertCountLoading = true;
      })
      .addCase(getExpertCount.fulfilled, (state, action) => {
        state.expertCountLoading = false;
        state.expertCount = action.payload;
      })
      .addCase(getExpertCount.rejected, (state, action) => {
        state.expertCountLoading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpertPage.pending, (state) => {
        state.expertPageLoading = true;
      })
      .addCase(getExpertPage.fulfilled, (state, action) => {
        state.expertPageLoading = false;
        state.expertPage = action.payload;
      })
      .addCase(getExpertPage.rejected, (state, action) => {
        state.expertPageLoading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpertFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpertFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.expertData = action.payload;
      })
      .addCase(getExpertFilter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpertAssociation.pending, (state) => {
        state.expertAssociationLoading = true;
        state.expertAssociationError = null;
      })
      .addCase(getExpertAssociation.fulfilled, (state, action) => {
        state.expertAssociationLoading = false;
        state.expertAssociationData = action.payload;
      })
      .addCase(getExpertAssociation.rejected, (state, action) => {
        state.expertAssociationLoading = false;
        state.expertAssociationError = action.error.message;
      });
  },
});

export default expertsSlice.reducer;
