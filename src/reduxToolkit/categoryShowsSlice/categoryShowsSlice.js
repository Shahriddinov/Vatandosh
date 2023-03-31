import { createSlice } from "@reduxjs/toolkit";
import { getCategoryShows } from "./extraReducer";

const initialState = {
  loading: false,
  categoriesData: [],
  error: null,
};

const categoryShowsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryShows.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesData = action.payload;
      })
      .addCase(getCategoryShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoryShowsSlice.reducer;
