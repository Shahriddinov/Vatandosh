import { createSlice } from "@reduxjs/toolkit";
import {
  magazineGetAbout,
  magazineGetAll,
  magazineGetMenu,
  magazineGetOne,
  magazineGetOneAbout,
  magazineGetOneMenu,
  magazineGetOneTips,
  magazineGetTips,
  magazinePopularAll,
} from "./electronicJournalExtraReducers";

const initialState = {
  about: [],
  aboutLoading: true,

  oneAbout: {},
  oneAboutLoading: true,

  allMagazinePopular: [],
  allMagazinePopularLoading: true,

  allMagazine: [],
  allMagazineLoading: true,

  oneMagazine: {},
  oneMagazineLoading: true,

  menu: [],
  menuLoading: true,

  oneMenu: {},
  oneMenuLoading: true,

  tips: [],
  tipsLoading: true,

  oneTips: [],
  oneTipsLoading: true,

  error: null,
};

const electronicJournalSlice = createSlice({
  name: "electronicJournalSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(magazineGetAbout.pending, (state) => {
        state.aboutLoading = true;
        state.error = null;
      })
      .addCase(magazineGetAbout.fulfilled, (state, { payload }) => {
        state.aboutLoading = false;
        state.about = payload;
      })
      .addCase(magazineGetAbout.rejected, (state, { error }) => {
        state.aboutLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetOneAbout.pending, (state) => {
        state.oneAboutLoading = true;
        state.error = null;
      })
      .addCase(magazineGetOneAbout.fulfilled, (state, { payload }) => {
        state.oneAboutLoading = false;
        state.oneAbout = payload;
      })
      .addCase(magazineGetOneAbout.rejected, (state, { error }) => {
        state.oneAboutLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazinePopularAll.pending, (state) => {
        state.allMagazinePopularLoading = true;
        state.error = null;
      })
      .addCase(magazinePopularAll.fulfilled, (state, { payload }) => {
        state.allMagazinePopularLoading = false;
        state.allMagazinePopular = payload;
      })
      .addCase(magazinePopularAll.rejected, (state, { error }) => {
        state.allMagazinePopularLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetAll.pending, (state) => {
        state.allMagazineLoading = true;
        state.error = null;
      })
      .addCase(magazineGetAll.fulfilled, (state, { payload }) => {
        state.allMagazineLoading = false;
        state.allMagazine = payload;
      })
      .addCase(magazineGetAll.rejected, (state, { error }) => {
        state.allMagazineLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetOne.pending, (state) => {
        state.oneMagazineLoading = true;
        state.error = null;
      })
      .addCase(magazineGetOne.fulfilled, (state, { payload }) => {
        state.oneMagazineLoading = false;
        state.oneMagazine = payload;
      })
      .addCase(magazineGetOne.rejected, (state, { error }) => {
        state.oneMagazineLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetMenu.pending, (state) => {
        state.menuLoading = true;
        state.error = null;
      })
      .addCase(magazineGetMenu.fulfilled, (state, { payload }) => {
        state.menuLoading = false;
        state.menu = payload;
      })
      .addCase(magazineGetMenu.rejected, (state, { error }) => {
        state.menuLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetOneMenu.pending, (state) => {
        state.oneMenuLoading = true;
        state.error = null;
      })
      .addCase(magazineGetOneMenu.fulfilled, (state, { payload }) => {
        state.oneMenuLoading = false;
        state.oneMenu = payload;
      })
      .addCase(magazineGetOneMenu.rejected, (state, { error }) => {
        state.oneMenuLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetTips.pending, (state) => {
        state.tipsLoading = true;
        state.error = null;
      })
      .addCase(magazineGetTips.fulfilled, (state, { payload }) => {
        state.tipsLoading = false;
        state.tips = payload;
      })
      .addCase(magazineGetTips.rejected, (state, { error }) => {
        state.tipsLoading = false;
        state.error = error.message;
      });

    builder
      .addCase(magazineGetOneTips.pending, (state) => {
        state.oneTipsLoading = true;
        state.error = null;
      })
      .addCase(magazineGetOneTips.fulfilled, (state, { payload }) => {
        state.oneTipsLoading = false;
        state.oneTips = payload;
      })
      .addCase(magazineGetOneTips.rejected, (state, { error }) => {
        state.oneTipsLoading = false;
        state.error = error.message;
      });

    builder.addDefaultCase((state) => state);
  },
});

export default electronicJournalSlice.reducer;
