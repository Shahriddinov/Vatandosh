import { createSlice } from "@reduxjs/toolkit";
import { getExpert, getExperts } from "./ExpertSliceExtraReducer";

const initialState = {
  loading: true,
  expertData: [],
  expert: null,
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
        state.loading = true;
      })
      .addCase(getExpert.fulfilled, (state, action) => {
        state.loading = false;
        state.expert = action.payload;
      })
      .addCase(getExpert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default expertsSlice.reducer;
