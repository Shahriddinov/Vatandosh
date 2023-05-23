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
import education from "./ExpertSlice/ExpertEducation/index";
import employment from "./ExpertSlice/ExpertEmployment/index";
// import expertMenu from "./ExpertMenu";
import quizSlice from "./victorinaQuiz";
import pageSlice from "./victorinapage";
import expertRegisterSlice from "./ExpertSlice/RegisterSlice/index";
import librarySlice from "./portalSlices/librarySlice";
import meetingSlice from "./portalSlices/meetingSlice/meetingSlice";
import volunteerSlice from "./volunteer/volunteerSlice";
import aboutUzbekistan from "./portalSlices/aboutUzbekistanSlice/aboutUzbekistanSlice";
import portalNews from "./portalSlices/portalNewsSlice/portalNewsSlice";
import webinarSlidesSlice from "./webinarSlider";
import quizTestSlice from "./victorinaQuiz/victorinaTest";
import mediaFileSlice from "./victorinaImage";
import quizFinishSlice from "./victorinaQuiz/victorinafinish";
import quizByIdSlice from "./victorinaQuiz/quizbyid";
import chatSlice from "./chatSlice";
<<<<<<< HEAD
import orgPageSlice from "./orgPageSlice/index";
=======
import AllProjectSlice from "./AllProjectSlice";
import notification from "./notificationSlice/notificationSlice";
import webinarBodySlice from './webinar'
>>>>>>> ee58b7d497dcd35f89e82dd3320d41091418c6b3

const store = configureStore({
  reducer: {
    newsSlice,
    eventsSlice,
    partnersSlice,
    employment,
    directionSlice,
    education,
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
    AllProjectSlice,
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
    webinarSlidesSlice,
    quizTestSlice,
    mediaFileSlice,
    quizByIdSlice,
    quizFinishSlice,
    chatSlice,
<<<<<<< HEAD
    orgPageSlice,
=======
    notification,
    webinarBodySlice
>>>>>>> ee58b7d497dcd35f89e82dd3320d41091418c6b3
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
