import { createSlice } from "@reduxjs/toolkit";
import { sendVictorinaFile } from "./download";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  fileData: [],
  error: null,
};

const quizFileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendVictorinaFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendVictorinaFile.fulfilled, (state, action) => {
        state.loading = false;
        state.fileData = action.payload;
        toast.success("This is the information succes done!");
      })
      .addCase(sendVictorinaFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizFileSlice.reducer;
