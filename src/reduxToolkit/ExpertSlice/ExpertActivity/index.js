import { createSlice } from "@reduxjs/toolkit";
import { getExpertActivity, getExpertActivityOne } from "./extraReducer";

const initialState = {
  data: [],
  loading: true,
  oneData: {},
  oneDataLoading: true,
  error: null,
};

const expertActivity = createSlice({
  name: "expertActivity",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getExpertActivity.pending, (state) => {
        state.loading = true;
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
      })
      .addCase(getExpertActivityOne.fulfilled, (state, action) => {
        state.oneDataLoading = false;
        state.oneData = action.payload;
      })
      .addCase(getExpertActivityOne.rejected, (state, action) => {
        state.oneDataLoading = false;
        state.error = action.error.message;
      });

    //getExpertActivityOne
  },
});

export default expertActivity.reducer;
