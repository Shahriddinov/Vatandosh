import { configureStore } from "@reduxjs/toolkit";

import newsSlice from "./newsSlice/newsSlice";
import partnersSlice from "./partnersSlice/partnersSlice";
import peaceful from "./peacefulSlice";
import language from "./languageSlice";
import mapSlice from "./mapSlice"
import trustees from "./trusteesSlice"

const store = configureStore({
  reducer: {
    newsSlice,
    partnersSlice,
    peaceful,
    language,
    mapSlice,
    trustees
  },
});

export default store;
