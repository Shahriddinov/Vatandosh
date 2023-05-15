import { createSlice } from "@reduxjs/toolkit";
import { getQuizzFinish } from "./finish";

const initialState = {
  loading: true,
  quizData: [],
  error: null,
};

const quizFinishSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizzFinish.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuizzFinish.fulfilled, (state, action) => {
        state.loading = false;
        state.quizData = action.payload;
      })
      .addCase(getQuizzFinish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizFinishSlice.reducer;
