import { createSlice } from "@reduxjs/toolkit";
import { getAllQuizData, getQuizDataById } from "./extraReducer";

const initialState = {
  allDataLoading: true,
  quizDataByIdLoading: true,
  allData: [],
  byIdData: [],
  allDataError: null,
  byIdDataError: null,
};

const choiceQuizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuizData.pending, (state, action) => {
        state.allDataLoading = true;
      })
      .addCase(getAllQuizData.fulfilled, (state, action) => {
        state.allDataLoading = false;
        state.allData = action.payload;
      })
      .addCase(getAllQuizData.rejected, (state, action) => {
        state.allDataLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getQuizDataById.pending, (state, action) => {
        state.quizDataByIdLoading = true;
      })
      .addCase(getQuizDataById.fulfilled, (state, action) => {
        state.quizDataByIdLoading = false;
        state.byIdData = action.payload;
      })
      .addCase(getQuizDataById.rejected, (state, action) => {
        state.quizDataByIdLoading = false;
        state.byIdDataError = action.error.message;
      });
  },
});

export default choiceQuizSlice.reducer;
