import { createSlice } from "@reduxjs/toolkit";
import { getInf } from "./extraReducer";

const initialState = {
  loading: true,
  data: [],
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
      });
  },
});

export default informationServicesSlice.reducer;
