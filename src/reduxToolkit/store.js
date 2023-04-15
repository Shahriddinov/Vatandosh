import { configureStore } from "@reduxjs/toolkit";

import newsSlice from "./newsSlice/newsSlice";
import partnersSlice from "./partnersSlice/partnersSlice";
import peaceful from "./peacefulSlice";
import language from "./languageSlice";
import mapSlice from "./mapSlice";
import trustees from "./trusteesSlice";
import contactSlice from "./contactSlice";
import sliderSlice from "./sliderSlice";
import associationSlice from "./associationsSlice";
import eventsSlice from "./eventsSlice";
import informationServicesSlice from "./informationServicesSlice/informationServicesSlice";
import mediatekaSlice from "./mediatekaSlice";
import singleSlice from "./singleSlice";
import tagSearchSlice from "./tagSearchSlice/tagSearchSlice";
import directionSlice from "./Direction";
import aboutSlice from "./About";
import managementSlice from "./ManagementSlice";
import searchSlice from "./searchSlice/searchSlice";
import authSlice from "./authSlice/authSlice";

const store = configureStore({
  reducer: {
    newsSlice,
    eventsSlice,
    partnersSlice,
    directionSlice,
    peaceful,
    language,
    mapSlice,
    trustees,
    contactSlice,
    sliderSlice,
    singleSlice,
    associationSlice,
    mediatekaSlice,
    informationServicesSlice,
    tagSearchSlice,
    aboutSlice,
    managementSlice,
    searchSlice,
    authSlice,
  },
});

export default store;
