import { createSlice } from "@reduxjs/toolkit";
import { getPartners } from "./extraReducer";

const initialState = {
  loading: false,
  partnersData: [],
  error: null,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.partnersData = action.payload;
      })
      .addCase(getPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default partnersSlice.reducer;
