import { createSlice } from "@reduxjs/toolkit";
import {
  getCountries,
  getCountriesAssociationData,
  getCountriesNews,
  getCountriesNewsData,
  mapGetData,
} from "./mapAsyncThunk";

const initialState = {
  mapData: [],
  mapDataLoading: false,

  countries: [],
  countriesLoading: false,

  countryNews: [],
  countryNewsLoading: true,

  countryNewsData: [],
  countryNewsDataLoading: true,

  countryAssociationData: [],
  countryAssociationDataLoading: true,

  error: "",
};

const mapSlice = createSlice({
  name: "mapSlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(mapGetData.pending, (state) => {
        state.mapDataLoading = true;
      })
      .addCase(mapGetData.fulfilled, (state, { payload }) => {
        state.mapDataLoading = false;
        state.mapData = payload.data;
      })
      .addCase(mapGetData.rejected, (state, action) => {
        state.mapDataLoading = false;
        state.error = action.error.message;
      });
    build
      .addCase(getCountries.pending, (state) => {
        state.countriesLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.countriesLoading = false;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.error = action.error.message;
        state.countriesLoading = false;
      });

    build
      .addCase(getCountriesNews.pending, (state) => {
        state.countryNewsLoading = true;
      })
      .addCase(getCountriesNews.fulfilled, (state, { payload }) => {
        state.countryNews = payload;
        state.countryNewsLoading = false;
      })
      .addCase(getCountriesNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.countryNewsLoading = false;
      });

    build
      .addCase(getCountriesNewsData.pending, (state) => {
        state.countryNewsDataLoading = true;
      })
      .addCase(getCountriesNewsData.fulfilled, (state, { payload }) => {
        state.countryNewsData = payload;
        state.countryNewsDataLoading = false;
      })
      .addCase(getCountriesNewsData.rejected, (state, action) => {
        state.error = action.error.message;
        state.countryNewsDataLoading = false;
      });

    build
      .addCase(getCountriesAssociationData.pending, (state) => {
        state.countryAssociationDataLoading = true;
      })
      .addCase(getCountriesAssociationData.fulfilled, (state, { payload }) => {
        state.countryAssociationData = payload;
        state.countryAssociationDataLoading = false;
      })
      .addCase(getCountriesAssociationData.rejected, (state, action) => {
        state.error = action.error.message;
        state.countryAssociationDataLoading = false;
      });
  },
});

export default mapSlice.reducer;
