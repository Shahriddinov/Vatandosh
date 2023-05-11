import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCommunity,
  getAllEvents,
  getAllRegions,
  getCommunityHomePage,
  getLocation,
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
  work: "",
  created_date: "",
  members: 0,
  achievement: "",
  region_id: "Uzbekiston",
  city_id: "Toshkent",
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

  locationGet: [],
  locationGetLoading: true,

  allRegionsGet: [],
  allRegionsGetLoading: true,

  allCommunityGet: [],
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
        const newCommunityCreateData = {
          ...state.communityCreateData,
          [action.meta.arg.key]:
            [action.meta.arg.key] === "attachments"
              ? action.payload.path
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

    //getAllEvents

    builder.addDefaultCase((state) => state);
  },
});

export const {
  findSingleRegion,
  communityCreateDataAdd,
  communityCreateReset,
} = communitySlice.actions;
export default communitySlice.reducer;
