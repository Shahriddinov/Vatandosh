import { createSlice } from "@reduxjs/toolkit";
import { getInf, getPagination } from "./extraReducer";

const initialState = {
  loading: true,
  paginationLoading: true,
  data: [],
  paginationData: {},
  error: null,
};

const informationServicesSlice = createSlice({
  name: "informationServicesSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getInf.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInf.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPagination.pending, (state) => {
        state.paginationLoading = true
      })
      .addCase(getPagination.fulfilled, (state, { payload }) => {
        state.paginationData = { ...payload }
        state.paginationLoading = false
      })
      .addCase(getPagination.rejected, (state, action) => {
        state.paginationLoading = false
        state.error = action.error.message
      })
  },
});

export default informationServicesSlice.reducer;
