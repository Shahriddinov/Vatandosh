import { createSlice } from "@reduxjs/toolkit";
import { getExperts } from "./ExpertSliceExtraReducer";

const initialState = {
  loading: true,
  expertData: [],
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
  },
});

export default expertsSlice.reducer;
