import { createSlice } from "@reduxjs/toolkit";
import { getColumnMenu, getSinglePagination } from "./singleAsyncThunk";

const initialState = {
  projectsData: [],
  paginationData: {},
  projectsLoading: true,
  paginationLoading: true,
  error: null,
};

const singleSlice = createSlice({
  name: "singleSlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getColumnMenu.pending, (state) => {
        state.projectsLoading = true;
        state.error = null;
      })
      .addCase(getColumnMenu.fulfilled, (state, { payload }) => {
        state.projectsData = payload;
        state.projectsLoading = false;
      })
      .addCase(getColumnMenu.rejected, (state, action) => {
        state.error = action.error.message;
        state.projectsLoading = false;
      });
    build
      .addCase(getSinglePagination.pending, (state) => {
        state.paginationLoading = true;
      })
      .addCase(getSinglePagination.fulfilled, (state, { payload }) => {
        state.paginationData = { ...payload };
        state.paginationLoading = false;
      })
      .addCase(getSinglePagination.rejected, (state, action) => {
        state.error = action.error.message;
        state.paginationLoading = false;
      });
  },
});

export default singleSlice.reducer;
