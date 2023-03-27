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
import categoryShows from "./categoryShowsSlice/categoryShowsSlice";
import eventsSlice from "./eventsSlice";
import mediatekaSlice from "./mediatekaSlice";

const store = configureStore({
  reducer: {
    newsSlice,
    eventsSlice,
    partnersSlice,
    peaceful,
    language,
    mapSlice,
    trustees,
    contactSlice,
    sliderSlice,
    categoryShows,

    associationSlice,
    mediatekaSlice,
  },
});

export default store;
