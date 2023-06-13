import { createSlice } from "@reduxjs/toolkit";
import {
  deleteSuggestions,
  getSuggestionMenu,
  getSuggestions,
  postSuggestions,
} from "./extraReducer";

const initialState = {
  loading: true,
  expertSuggestionsData: [],
  error: null,

  expertSuggestionCreateAndUpdateStatus: null,

  expertSuggestionDelete: null,
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
        state.expertSuggestionsData = action.payload;
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(postSuggestions.pending, (state) => {
        state.expertSuggestionCreateAndUpdateStatus = null;
        state.expertSuggestionDelete = null;
      })
      .addCase(postSuggestions.fulfilled, (state, action) => {
        state.expertSuggestionCreateAndUpdateStatus = "success";
      })
      .addCase(postSuggestions.rejected, (state, action) => {
        state.expertSuggestionCreateAndUpdateStatus = "error";
      });

    builder
      .addCase(deleteSuggestions.pending, (state) => {
        state.expertSuggestionDelete = null;
        state.expertSuggestionCreateAndUpdateStatus = null;
      })
      .addCase(deleteSuggestions.fulfilled, (state, action) => {
        state.expertSuggestionDelete = "success";
      })
      .addCase(deleteSuggestions.rejected, (state, action) => {
        state.expertSuggestionDelete = "error";
      });
    //
  },
});

export default suggestionSlice.reducer;
