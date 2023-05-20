import { createSlice } from "@reduxjs/toolkit";
import {
  getAllAboutUzbMenu,
  getAllCity,
  getAllCity3D,
  getAllCityContent,
  getAllCityVideo,
  getAllGallery,
  getAllSightseeing,
  getOneCity3D,
  getOneGallery,
  getSingleAboutUzbMenu,
  getSingleCity,
  getSingleCityVideo,
  getSingleSightseeing,
} from "./aboutUzbekistanSliceAsyncThunks";

const initialState = {
  allAboutUzbMenu: [],
  allAboutUzbMenuLoading: true,

  singleAboutUzbMenu: {},
  singleAboutUzbMenuLoading: true,

  allCityContent: [],
  allCityContentLoading: true,

  allCity: [],
  allCityLoading: true,

  singleCity: {},
  singleCityLoading: true,

  allCityVideo: [],
  allCityVideoLoading: true,

  singleCityVideo: {},
  singleCityVideoLoading: true,

  allCitySightseeing: [],
  allCitySightseeingLoading: true,

  singleCitySightseeing: {},
  singleCitySightseeingLoading: true,

  allGallery: [],
  allGalleryLoading: true,

  singleGallery: {},
  singleGalleryLoading: true,

  allCity3D: [],
  allCity3dLoading: true,

  singleCity3D: {},
  singleCity3dLoading: true,

  error: null,
};

const aboutUzbekistanSlice = createSlice({
  name: "aboutUzbekistanSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllAboutUzbMenu.pending, (state) => {
        state.allAboutUzbMenuLoading = true;
      })
      .addCase(getAllAboutUzbMenu.fulfilled, (state, { payload }) => {
        state.allAboutUzbMenuLoading = false;
        state.allAboutUzbMenu = payload;
      })
      .addCase(getAllAboutUzbMenu.rejected, (state, { error }) => {
        state.error = error.message;
        state.allAboutUzbMenuLoading = false;
      });
    builder
      .addCase(getSingleAboutUzbMenu.pending, (state) => {
        state.singleAboutUzbMenuLoading = true;
      })
      .addCase(getSingleAboutUzbMenu.fulfilled, (state, { payload }) => {
        state.singleAboutUzbMenuLoading = false;
        state.singleAboutUzbMenu = payload;
      })
      .addCase(getSingleAboutUzbMenu.rejected, (state, { error }) => {
        state.singleAboutUzbMenuLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAllCityContent.pending, (state) => {
        state.allCityContentLoading = true;
      })
      .addCase(getAllCityContent.fulfilled, (state, { payload }) => {
        state.allCityContentLoading = false;
        state.allCityContent = payload;
      })
      .addCase(getAllCityContent.rejected, (state, { error }) => {
        state.allCityContentLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getAllCity.pending, (state) => {
        state.allCityLoading = true;
      })
      .addCase(getAllCity.fulfilled, (state, { payload }) => {
        state.allCityLoading = false;
        state.allCity = payload;
      })
      .addCase(getAllCity.rejected, (state, { error }) => {
        state.allCityLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getSingleCity.pending, (state) => {
        state.singleCityLoading = true;
      })
      .addCase(getSingleCity.fulfilled, (state, { payload }) => {
        state.singleCityLoading = false;
        state.singleCity = payload;
      })
      .addCase(getSingleCity.rejected, (state, { error }) => {
        state.singleCityLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getAllCityVideo.pending, (state) => {
        state.allCityVideoLoading = true;
      })
      .addCase(getAllCityVideo.fulfilled, (state, { payload }) => {
        state.allCityVideoLoading = false;
        state.allCityVideo = payload;
      })
      .addCase(getAllCityVideo.rejected, (state, { error }) => {
        state.allCityVideoLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getSingleCityVideo.pending, (state) => {
        state.singleCityVideoLoading = true;
      })
      .addCase(getSingleCityVideo.fulfilled, (state, { payload }) => {
        state.singleCityVideoLoading = false;
        state.singleCityVideo = payload;
      })
      .addCase(getSingleCityVideo.rejected, (state, { error }) => {
        state.singleCityVideoLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getAllSightseeing.pending, (state) => {
        state.allCitySightseeingLoading = true;
      })
      .addCase(getAllSightseeing.fulfilled, (state, { payload }) => {
        state.allCitySightseeingLoading = false;
        state.allCitySightseeing = payload;
      })
      .addCase(getAllSightseeing.rejected, (state, { error }) => {
        state.allCitySightseeingLoading = false;
        state.error = error.message;
      });
    builder
      .addCase(getSingleSightseeing.pending, (state) => {
        state.singleCitySightseeingLoading = true;
      })
      .addCase(getSingleSightseeing.fulfilled, (state, { payload }) => {
        state.singleCitySightseeingLoading = false;
        state.singleCitySightseeing = payload;
      })
      .addCase(getSingleSightseeing.rejected, (state, { error }) => {
        state.singleCitySightseeingLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getAllCity3D.pending, (state) => {
        state.allCity3dLoading = true;
      })
      .addCase(getAllCity3D.fulfilled, (state, { payload }) => {
        state.allCity3dLoading = false;
        state.allCity3D = payload;
      })
      .addCase(getAllCity3D.rejected, (state, { error }) => {
        state.allCity3dLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getOneCity3D.pending, (state) => {
        state.singleCity3dLoading = true;
      })
      .addCase(getOneCity3D.fulfilled, (state, { payload }) => {
        state.singleCity3dLoading = false;
        state.singleCity3D = payload;
      })
      .addCase(getOneCity3D.rejected, (state, { error }) => {
        state.singleCity3dLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getAllGallery.pending, (state) => {
        state.allGalleryLoading = true;
      })
      .addCase(getAllGallery.fulfilled, (state, { payload }) => {
        state.allGalleryLoading = false;
        state.allGallery = payload;
      })
      .addCase(getAllGallery.rejected, (state, { error }) => {
        state.allGalleryLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getOneGallery.pending, (state) => {
        state.singleGalleryLoading = true;
      })
      .addCase(getOneGallery.fulfilled, (state, { payload }) => {
        state.singleGalleryLoading = false;
        state.singleGallery = payload;
      })
      .addCase(getOneGallery.rejected, (state, { error }) => {
        state.singleGalleryLoading = false;
        state.error = error.message;
      });

    builder.addDefaultCase((state) => state);
  },
});

export default aboutUzbekistanSlice.reducer;
