import { createSlice } from "@reduxjs/toolkit";

import {
  getVolunteerOne,
  volunteerCreate,
  volunteerUpdate,
  deleteVolunteerOne,
  getVolunteerActivity,
  getVolunteerCity,
  getVolunteerFilter,
  deleteVolunteerActivity,
  updateVolunteerActivity2,
  getVolunteerActivityOne,
} from "./extraReducer";

const initialState = {
  volunteerLoading: true,
  volunteerData: [],

  volunteerCityLoading: true,
  volunteerCity: [],

  volunteerOneLoading: true,
  volunteerOneData: [],

  deleteLoading: true,

  volunteerCreateLoading: true,
  volunteerCreateData: [],
  volunteerCreateStatus: null,

  volunteerUpdateLoading: true,
  volunteerUpdateData: [],

  volunteerActivity: [],
  volunteerActivityLoading: true,
  volunteerActivityError: null,

  volunteerActivityOne: [],
  volunteerActivityOneLoading: true,
  volunteerActivityOneError: null,

  deleteVolunteerStatus: "idle",
  updateVolunteerActivityLoading2: true,

  status: "idle",
  error: null,
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Get volunteers
    builder
      .addCase(getVolunteerFilter.pending, (state) => {
        state.volunteerLoading = true;
        state.volunteerCreateStatus = null;
      })
      .addCase(getVolunteerFilter.fulfilled, (state, action) => {
        state.volunteerLoading = false;
        state.volunteerData = action.payload;
      })
      .addCase(getVolunteerFilter.rejected, (state, action) => {
        state.volunteerLoading = false;
        state.error = action.error.message;
      });

    // Get one volunteer
    builder
      .addCase(getVolunteerOne.pending, (state) => {
        state.volunteerOneLoading = true;
      })
      .addCase(getVolunteerOne.fulfilled, (state, action) => {
        state.volunteerOneLoading = false;
        state.volunteerOneData = action.payload;
      })
      .addCase(getVolunteerOne.rejected, (state, action) => {
        state.volunteerOneLoading = false;
        state.error = action.error.message;
      });

    // Get city
    builder
      .addCase(getVolunteerCity.pending, (state) => {
        state.volunteerCityLoading = true;
      })
      .addCase(getVolunteerCity.fulfilled, (state, action) => {
        state.volunteerCityLoading = false;
        state.volunteerCity = action.payload;
      })
      .addCase(getVolunteerCity.rejected, (state, action) => {
        state.volunteerCityLoading = false;
        state.error = action.error.message;
      });

    // Delete one volunteer
    builder
      .addCase(deleteVolunteerOne.pending, (state) => {
        state.deleteLoading = true;
        state.volunteerCreateStatus = null;
      })
      .addCase(deleteVolunteerOne.fulfilled, (state, action) => {
        state.deleteLoading = false;
        alert("Deleted");
      })
      .addCase(deleteVolunteerOne.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.error.message;
      });

    // Create volunteer
    builder
      .addCase(volunteerCreate.pending, (state) => {
        state.volunteerCreateLoading = true;
        state.status = "idle";
        state.volunteerCreateStatus = null;
      })
      .addCase(volunteerCreate.fulfilled, (state, action) => {
        state.volunteerCreateLoading = false;
        state.volunteerCreateData = action.payload;
        state.status = "succeeded";
        state.volunteerCreateStatus = "post_succeeded";
      })
      .addCase(volunteerCreate.rejected, (state, action) => {
        state.volunteerCreateLoading = false;
        state.error = action.error.message;
        state.volunteerCreateStatus = "error";
      });

    // Update volunteer
    builder
      .addCase(volunteerUpdate.pending, (state) => {
        state.volunteerUpdateLoading = true;
        state.status = "idle";
        state.volunteerCreateStatus = null;
      })
      .addCase(volunteerUpdate.fulfilled, (state, action) => {
        state.volunteerUpdateLoading = false;
        state.volunteerUpdateData = action.payload;
        state.status = "succeeded";
        state.volunteerCreateStatus = "update_succeeded";
      })
      .addCase(volunteerUpdate.rejected, (state, action) => {
        state.volunteerUpdateLoading = false;
        state.error = action.error.message;
      });

    // get volunteer activity
    builder
      .addCase(getVolunteerActivity.pending, (state) => {
        state.volunteerActivityLoading = true;
        state.volunteerCreateStatus = null;
      })
      .addCase(getVolunteerActivity.fulfilled, (state, action) => {
        state.volunteerActivityLoading = false;
        state.volunteerActivity = action.payload;
      })
      .addCase(getVolunteerActivity.rejected, (state, action) => {
        state.volunteerActivityLoading = false;
        state.volunteerActivityError = action.error.message;
      });

    // get volunteer activity one
    builder
      .addCase(getVolunteerActivityOne.pending, (state) => {
        state.volunteerActivityOneLoading = true;
      })
      .addCase(getVolunteerActivityOne.fulfilled, (state, action) => {
        state.volunteerActivityOneLoading = false;
        state.volunteerActivityOne = action.payload;
      })
      .addCase(getVolunteerActivityOne.rejected, (state, action) => {
        state.volunteerActivityOneLoading = false;
        state.volunteerActivityOneError = action.error.message;
      });

    // updateVolunteerActivity2 2
    builder
      .addCase(updateVolunteerActivity2.pending, (state) => {
        state.updateVolunteerActivityLoading2 = true;
        state.volunteerCreateStatus = "null";
      })
      .addCase(updateVolunteerActivity2.fulfilled, (state, action) => {
        state.updateVolunteerActivityLoading2 = false;
        state.volunteerCreateStatus = "update_succeeded";
      })
      .addCase(updateVolunteerActivity2.rejected, (state, action) => {
        state.updateVolunteerActivityLoading2 = false;
        state.volunteerCreateStatus = "error";
      });
    // delete volunteer
    builder
      .addCase(deleteVolunteerActivity.pending, (state) => {
        state.deleteVolunteerStatus = "pending";
      })
      .addCase(deleteVolunteerActivity.fulfilled, (state) => {
        state.deleteVolunteerStatus = "idle";
      })
      .addCase(deleteVolunteerActivity.rejected, (state) => {
        state.deleteVolunteerStatus = "error";
      });
  },
});

export default volunteerSlice.reducer;
