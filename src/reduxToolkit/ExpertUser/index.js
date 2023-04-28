import { createSlice } from "@reduxjs/toolkit";
import { getExpertUser } from "./User";

const initialState = {
  loading: true,
  UserData: [],
  error: null,
};

const expertUser = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpertUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpertUser.fulfilled, (state, action) => {
        state.loading = false;
        state.UserData = action.payload;
      })
      .addCase(getExpertUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default expertUser.reducer;
