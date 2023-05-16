import { createSlice } from "@reduxjs/toolkit";
import { getExpertOneEducation } from "./extraReducer";

const initialState = {
  education: [],
  educationLoading: true,
  error: null,
};

const educationSlice = createSlice({
  name: "get one expert education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpertOneEducation.pending, (state) => {
        state.educationLoading = true;
      })
      .addCase(getExpertOneEducation.fulfilled, (state, action) => {
        state.educationLoading = false;
        state.education = action.payload;
      })
      .addCase(getExpertOneEducation.rejected, (state, action) => {
        state.educationLoading = false;
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
