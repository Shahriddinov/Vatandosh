import { createSlice } from "@reduxjs/toolkit";
import { getExpertRegisterMenu } from "./extraReducer";

const initialState = {
  loading: true,
  error: null,
  menu: [],
};

const expertRegisterSlice = createSlice({
  name: "Get expert register menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpertRegisterMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpertRegisterMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getExpertRegisterMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default expertRegisterSlice.reducer;
