import { createSlice } from "@reduxjs/toolkit";
import {
  getColumnMenu,
  getCompatriotsMenu,
  getSinglePagination,
} from "./singleAsyncThunk";

const initialState = {
  projectsData: [],
  paginationData: {},
  compatriotsMenu: {},
  projectsLoading: true,
  paginationLoading: true,
  compatriotsMenuLoading: true,
  error: null,
  compatriotsMenuError: null,
  paginationError: null,
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
        state.paginationError = action.error.message;
        state.paginationLoading = false;
      });
    build
      .addCase(getCompatriotsMenu.pending, (state) => {
        state.compatriotsMenuLoading = true;
        state.compatriotsMenuError = null;
      })
      .addCase(getCompatriotsMenu.fulfilled, (state, { payload }) => {
        state.compatriotsMenu = payload;
        state.compatriotsMenuLoading = false;
      })
      .addCase(getCompatriotsMenu.rejected, (state, { error }) => {
        state.compatriotsMenuLoading = false;
        state.compatriotsMenuError = error.message;
      });
  },
});

export default singleSlice.reducer;
