import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCommunity,
  getAllEvents,
  getAllRegions,
  getCommunityHomePage,
  getCountryCities,
  getEventsDetail,
  getLocation,
  getLocationOne,
  postCommunityCreate,
  postCommunityImage,
} from "./communityExtraReducers";
import {
  getItem,
  removeItem,
  setItem,
} from "../../../helpers/persistanceStorage";

const data = {
  name: "",
  title: "",
  description: "",
  logo: "",
  document: "",
  director: "",
  director_img: "",
  director_date: "",
  work: "",
  created_date: "",
  members: 0,
  achievement: "",
  region_id: "",
  city_id: "",
  phone: "",
  email: "",
  address: "",
  site: "",
  status: "",
  attachments: [],
};

const initialState = {
  allEvents: [],
  allEventsLoading: true,

  oneEventsDetail: {},
  oneEventsDetailLoading: true,

  locationGet: [],
  locationGetLoading: true,

  locationGetOne: [],
  locationGetOneLoading: true,

  allRegionsGet: [],
  allRegionsGetLoading: true,

  allCitiesGet: [],
  allCitiesGetLoading: true,

  allCommunityGet: {},
  allCommunityData: [],
  allCommunityGetLoading: true,

  communityHomePageData: {},
  communityHomePageLoading: true,

  communityCreateData: getItem("communityCreate")
    ? JSON.parse(getItem("communityCreate"))
    : data,
  communityCreateDataStatus: null,
  communityCreateDataLoading: true,

  communityImagePost: {},
  communityImagePostStatus: null,
  communityImagePostLoading: false,

  singleRegion: {},
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
    communityCreateDataAdd: (state, { payload }) => {
      state.communityCreateData = payload;
      setItem("communityCreate", JSON.stringify(payload));
    },
    communityCreateReset: (state) => {
      removeItem("communityCreate");
      state.communityCreateData = data;
    },
    deleteAvatar: (state) => {
      state.communityCreateData = {
        ...state.communityCreateData,
        director_img: "",
      };
      state.communityCreateData = data;
    },
    deleteCommunityImage: (state, { payload }) => {
      const newImages = state.communityCreateData.attachments.filter(
        (el) => el === payload
      );
      const newObj = {
        ...state.communityCreateData,
        attachments: newImages,
      };
      state.communityCreateData = { ...newObj };
      setItem("communityCreate", JSON.stringify(newObj));
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
      .addCase(getLocationOne.pending, (state) => {
        state.locationGetOneLoading = true;
      })
      .addCase(getLocationOne.fulfilled, (state, { payload }) => {
        state.locationGetOneLoading = false;
        state.locationGetOne = payload;
      })
      .addCase(getLocationOne.rejected, (state, { error }) => {
        state.locationGetOneLoading = false;
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
        state.allRegionsGetLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getCountryCities.pending, (state) => {
        state.allCitiesGetLoading = true;
      })
      .addCase(getCountryCities.fulfilled, (state, { payload }) => {
        state.allCitiesGetLoading = false;
        state.allCitiesGet = payload;
      })
      .addCase(getCountryCities.rejected, (state, { error }) => {
        state.allCitiesGetLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getAllCommunity.pending, (state, { meta }) => {
        state.allCommunityGetLoading = true;
        if (meta.arg.country || meta.arg.typePage) {
          state.allCommunityData = [];
        }
      })
      .addCase(getAllCommunity.fulfilled, (state, { payload }) => {
        state.allCommunityData = [...state.allCommunityData, ...payload.data];
        state.allCommunityGet = payload;
        state.allCommunityGetLoading = false;
      })
      .addCase(getAllCommunity.rejected, (state, { error }) => {
        state.allCommunityGetLoading = false;
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

    builder
      .addCase(postCommunityCreate.pending, (state) => {
        state.communityCreateDataLoading = true;
        state.communityCreateDataStatus = null;
      })
      .addCase(postCommunityCreate.fulfilled, (state, { payload }) => {
        state.communityCreateDataLoading = false;
        // state.communityCreateData = payload;
        state.communityCreateDataStatus = "success";
      })
      .addCase(postCommunityCreate.rejected, (state, { error }) => {
        state.communityCreateDataLoading = false;
        state.communityCreateDataStatus = "error";
        state.error = error.message;
      });

    builder
      .addCase(postCommunityImage.pending, (state) => {
        state.communityImagePostLoading = true;
        state.communityImagePostStatus = null;
      })
      .addCase(postCommunityImage.fulfilled, (state, action) => {
        state.communityImagePostLoading = false;
        state.communityImagePost = action.payload;
        state.communityImagePostStatus = "success";
        console.log(action.meta.arg.key);
        const newCommunityCreateData = {
          ...state.communityCreateData,
          [action.meta.arg.key]:
            action.meta.arg.key === "attachments"
              ? [...state.communityCreateData.attachments, action.payload.path]
              : action.payload.path,
        };
        state.communityCreateData = newCommunityCreateData;
        setItem("communityCreate", JSON.stringify(newCommunityCreateData));
      })
      .addCase(postCommunityImage.rejected, (state, { error }) => {
        state.communityImagePostLoading = false;
        state.communityImagePostStatus = "error";
        state.error = error.message;
        alert("Fayl yuklanmadi, qaytadan urunib ko'ring");
      });

    builder
      .addCase(getAllEvents.pending, (state) => {
        state.allEventsLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.allEventsLoading = false;
        state.allEvents = payload;
      })
      .addCase(getAllEvents.rejected, (state, { error }) => {
        state.allEventsLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(getEventsDetail.pending, (state) => {
        state.oneEventsDetailLoading = true;
      })
      .addCase(getEventsDetail.fulfilled, (state, { payload }) => {
        state.oneEventsDetailLoading = false;
        state.oneEventsDetail = payload;
      })
      .addCase(getEventsDetail.rejected, (state, { error }) => {
        state.oneEventsDetailLoading = false;
        state.error = error.message;
      });

    //getAllEvents

    builder.addDefaultCase((state) => state);
  },
});

export const {
  findSingleRegion,
  communityCreateDataAdd,
  communityCreateReset,
  deleteAvatar,
  deleteCommunityImage,
} = communitySlice.actions;
export default communitySlice.reducer;
