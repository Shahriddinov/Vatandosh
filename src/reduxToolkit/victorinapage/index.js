import { createSlice } from "@reduxjs/toolkit";
import { getQuizPage } from "./victorina-page";

const initialState = {
  loading: true,
  pageData: [],
  error: null,
};

const pageSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuizPage.fulfilled, (state, action) => {
        state.loading = false;
        state.pageData = action.payload;
      })
      .addCase(getQuizPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pageSlice.reducer;
