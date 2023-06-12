import { createSlice } from "@reduxjs/toolkit";
import { getExpertActivity } from "./extraReducer";

const initialState = {
  data: [],
  loading: true,
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
  },
});

export default expertActivity.reducer;
