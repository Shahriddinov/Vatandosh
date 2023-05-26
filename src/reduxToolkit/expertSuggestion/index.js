import { createSlice } from "@reduxjs/toolkit";
import { getSuggestionMenuData } from "./Suggestion";

const initialState = {
  loading: true,
  menuSuggestionData: [],
  error: null,
};

const menuSuggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestionMenuData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSuggestionMenuData.fulfilled, (state, action) => {
        state.loading = false;
        state.menuSuggestionData = action.payload;
      })
      .addCase(getSuggestionMenuData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSuggestionSlice.reducer;
