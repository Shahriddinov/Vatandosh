import { createSlice } from "@reduxjs/toolkit";
import { getTestQuizz } from "./getTest";

const initialState = {
  loading: true,
  quizTestData: [],
  error: null,
};

const quizTestSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestQuizz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestQuizz.fulfilled, (state, action) => {
        state.loading = false;
        state.quizTestData = action.payload;
      })
      .addCase(getTestQuizz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizTestSlice.reducer;
