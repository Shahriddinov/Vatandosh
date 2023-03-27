import { createSlice } from "@reduxjs/toolkit";
import {
  getInteractiveServices,
  getPeaceful,
  getProjectsMenu,
} from "./peacefulExtraReducer";

const initialState = {
  peacefulData: [],
  menuData: [],
  interactiveServices: [],
  interactiveServicesLoading: false,
  loading: true,
  menuLoading: true,
  error: "",
};

const peacefullSlice = createSlice({
  name: "peacefulSlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // Get peaceful data
    build
      .addCase(getPeaceful.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPeaceful.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.peacefulData = payload;
      })
      .addCase(getPeaceful.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });

    // Get interactive services
    build
      .addCase(getInteractiveServices.pending, (state) => {
        state.interactiveServicesLoading = true;
      })
      .addCase(getInteractiveServices.fulfilled, (state, { payload }) => {
        state.interactiveServicesLoading = false;
        state.interactiveServices = payload;
      })
      .addCase(getInteractiveServices.rejected, (state, action) => {
        state.interactiveServicesLoading = false;
        state.error = action.error.message;
      });

    // Get projects menu
    build
      .addCase(getProjectsMenu.pending, (state) => {
        state.menuLoading = true;
      })
      .addCase(getProjectsMenu.fulfilled, (state, action) => {
        state.menuLoading = false;
        state.menuData = action.payload;
      })
      .addCase(getProjectsMenu.rejected, (state, action) => {
        state.menuLoading = false;
        state.error = action.error.message;
      });
  },
});

export default peacefullSlice.reducer;
