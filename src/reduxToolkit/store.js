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
import tagsSlice from "./tagsSlice/tagsSlice";
import authSlice from "./authSlice/authSlice";
import formDataSlice from "./projectsSlice/projectsSlice";
import { community } from "./portalSlices";
import suggestionSlice from "./ExpertSlice/Suggestions/index";
import expertSlice from "./ExpertSlice/ExpertsSlice";
// import expertMenu from "./ExpertMenu";
import quizSlice from "./victorinaQuiz";
import pageSlice from "./victorinapage";
import expertRegisterSlice from "./ExpertSlice/RegisterSlice/index";
import librarySlice from "./portalSlices/librarySlice";
import meetingSlice from "./portalSlices/meetingSlice/meetingSlice";
import volunteerSlice from "./volunteer/volunteerSlice";
import aboutUzbekistan from "./portalSlices/aboutUzbekistanSlice/aboutUzbekistanSlice";
import portalNews from "./portalSlices/portalNewsSlice/portalNewsSlice";

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
    tagsSlice,
    authSlice,
    formDataSlice,
    community,
    expertSlice,
    // expertMenu,
    quizSlice,
    pageSlice,
    suggestionSlice,
    expertRegisterSlice,
    librarySlice,
    volunteerSlice,
    meetingSlice,
    aboutUzbekistan,
    portalNews,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
