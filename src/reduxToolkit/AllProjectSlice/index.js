import { createSlice } from "@reduxjs/toolkit";
import { aboutAllProjects, getAllProjects } from "./extraReducer";

const initialState = {
  projects: [],
  projectsLoading: true,
  projectsError: null,

  projectsAbout: [],
  projectsAboutLoading: true,
  projectsAboutError: null,
};

const projectSlice = createSlice({
  name: "projets slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.projectsLoading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.projectsLoading = false;
        state.projects = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.projectsLoading = false;
        state.projectsError = action.error.message;
      });

    builder
      .addCase(aboutAllProjects.pending, (state) => {
        state.projectsAboutLoading = true;
      })
      .addCase(aboutAllProjects.fulfilled, (state, action) => {
        state.projectsAboutLoading = false;
        state.projectsAbout = action.payload;
      })
      .addCase(aboutAllProjects.rejected, (state, action) => {
        state.projectsAboutLoading = false;
        state.projectsAboutError = action.error.message;
      });
  },
});

export default projectSlice.reducer;
