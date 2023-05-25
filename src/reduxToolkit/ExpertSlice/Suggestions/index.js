import { createSlice } from "@reduxjs/toolkit";
import { getSuggestionMenu, getSuggestions } from "./extraReducer";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const suggestionSlice = createSlice({
  name: "expert-suggestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default suggestionSlice.reducer;
