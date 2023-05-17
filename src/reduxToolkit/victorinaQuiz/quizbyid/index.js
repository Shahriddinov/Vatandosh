import { createSlice } from "@reduxjs/toolkit";
import { getByIdQuizz } from "./quizid";

const initialState = {
  loading: true,
  quizByIdData: [],
  error: null,
};

const quizByIdSlice = createSlice({
  name: "quizbyid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getByIdQuizz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByIdQuizz.fulfilled, (state, action) => {
        state.loading = false;
        state.quizByIdData = action.payload;
      })
      .addCase(getByIdQuizz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizByIdSlice.reducer;
