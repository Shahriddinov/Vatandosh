import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCommunity,
  getAllRegions,
  getCommunityHomePage,
  getLocation,
} from "./communityExtraReducers";

const initialState = {
  locationGet: [],
  allRegionsGet: [],
  allCommunityGet: [],
  singleRegion: {},
  communityHomePageData: {},
  locationGetLoading: true,
  allRegionsGetLoading: true,
  allCommunityGetLoading: true,
  communityHomePageLoading: true,
  error: null,
};

const communitySlice = createSlice({
  name: "communitySlice",
  initialState,
  reducers: {
    findSingleRegion: (state, { payload }) => {
      state.singleRegion = state.allRegionsGet.find(
        (country) => country.code === payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.pending, (state) => {
        state.locationGetLoading = true;
      })
      .addCase(getLocation.fulfilled, (state, { payload }) => {
        state.locationGetLoading = false;
        state.locationGet = payload;
      })
      .addCase(getLocation.rejected, (state, { error }) => {
        state.locationGetLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAllRegions.pending, (state) => {
        state.allRegionsGetLoading = true;
      })
      .addCase(getAllRegions.fulfilled, (state, { payload }) => {
        state.allRegionsGetLoading = false;
        state.allRegionsGet = payload;
      })
      .addCase(getAllRegions.rejected, (state, { error }) => {
        state.allCommunityGetLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAllCommunity.pending, (state) => {
        state.allCommunityGetLoading = true;
      })
      .addCase(getAllCommunity.fulfilled, (state, { payload }) => {
        state.allCommunityGetLoading = false;
        state.allCommunityGet = payload;
      })
      .addCase(getAllCommunity.rejected, (state, { error }) => {
        state.allRegionsGetLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getCommunityHomePage.pending, (state) => {
        state.communityHomePageLoading = true;
      })
      .addCase(getCommunityHomePage.fulfilled, (state, { payload }) => {
        state.communityHomePageLoading = false;
        state.communityHomePageData = payload;
      })
      .addCase(getCommunityHomePage.rejected, (state, { error }) => {
        state.communityHomePageLoading = false;
        state.error = error.message;
      });

    builder.addDefaultCase((state) => state);
  },
});

export const { findSingleRegion } = communitySlice.actions;
export default communitySlice.reducer;
