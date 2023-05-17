import { createSlice } from "@reduxjs/toolkit";
import { getTestQuizz, sendVictorinaTest } from "./getTest";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  quizTestData: [],
  sendTestData: null,
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
    builder
      .addCase(sendVictorinaTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendVictorinaTest.fulfilled, (state, action) => {
        state.loading = false;
        state.sendTestData = action.payload;
        toast.success("This is the information succes done!");
      })
      .addCase(sendVictorinaTest.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default quizTestSlice.reducer;
