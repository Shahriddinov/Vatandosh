import { createSlice } from "@reduxjs/toolkit";
import { getExpertMenu } from "./Menu";

const initialState = {
  loading: true,
  menuData: [],
  error: null,
};

const expertMenu = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpertMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpertMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menuData = action.payload;
      })
      .addCase(getExpertMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default expertMenu.reducer;
