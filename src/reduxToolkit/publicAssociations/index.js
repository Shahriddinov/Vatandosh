import { createSlice } from "@reduxjs/toolkit";
import { getPublicAssociationData } from "./extraReducer";
import { getAllCountriesData } from "./extraReducer";

const initialState = {
  publicAssloading: false,
  publicAssdata: [],
  publicAsserror: null,
  countriesLoading: false,
  countriesData: [],
  countriesError: null,
};

const publicAssSlice = createSlice({
  name: "publicAss",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPublicAssociationData.pending, (state) => {
      state.publicAssloading = true;
    });
    builder.addCase(
      getPublicAssociationData.fulfilled,
      (state, { payload }) => {
        state.publicAssloading = false;
        state.publicAssdata = payload;
      }
    );
    builder.addCase(getPublicAssociationData.rejected, (state, action) => {
      state.publicAssloading = false;
      state.publicAsserror = action.error.message;
    });
    builder.addCase(getAllCountriesData.pending, (state) => {
      state.countriesLoading = true;
    });
    builder.addCase(getAllCountriesData.fulfilled, (state, { payload }) => {
      state.countriesLoading = false;
      state.countriesData = payload;
    });
    builder.addCase(getAllCountriesData.rejected, (state, action) => {
      state.countriesLoading = false;
      state.countriesError = action.error.message;
    });
  },
});

export default publicAssSlice.reducer;
