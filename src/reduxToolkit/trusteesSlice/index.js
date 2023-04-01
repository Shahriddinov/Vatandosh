import { createSlice } from "@reduxjs/toolkit";
import { getAllTrustees, getPaginationTrusts } from "./trusteesAsyncThunk";

const initialState = {
  allTrustees: [],
  moreTrusts: [],
  moreTrustsLoading: true,
  allTrusteesLoading: true,
  error: "",
};

const trusteesSlice = createSlice({
  name: "trusteesSlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getAllTrustees.pending, (state) => {
        state.allTrusteesLoading = true;
      })
      .addCase(getAllTrustees.fulfilled, (state, { payload }) => {
        state.allTrustees = payload;
        state.allTrusteesLoading = false;
      })
      .addCase(getAllTrustees.rejected, (state, { error }) => {
        state.allTrusteesLoading = false;
        state.error = error.message;
      });
    build
      .addCase(getPaginationTrusts.pending, (state) => {
        state.moreTrustsLoading = true;
      })
      .addCase(getPaginationTrusts.fulfilled, (state, { payload }) => {
        state.moreTrusts = payload;
        state.moreTrustsLoading = false;
      })
      .addCase(getPaginationTrusts.rejected, (state, { error }) => {
        state.moreTrustsLoading = false;
        state.error = error.message;
      });
  },
});

export default trusteesSlice.reducer;
