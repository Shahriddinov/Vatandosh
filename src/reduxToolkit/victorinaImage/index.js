import { createSlice } from "@reduxjs/toolkit";
import { mediaVictorina } from "./media-upload";

const initialState = {
  mediaUploadLoading: true,
  mediaUploadLoadingData: [],
  status: "idle",
  error: null,
};

const mediaSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Create volunteer
    builder
      .addCase(mediaVictorina.pending, (state) => {
        state.mediaUploadLoading = true;
        state.status = "idle";
      })
      .addCase(mediaVictorina.fulfilled, (state, action) => {
        state.mediaUploadLoading = false;
        state.mediaUploadLoadingData = action.payload;
        state.status = "succeeded";
      })
      .addCase(mediaVictorina.rejected, (state, action) => {
        state.mediaUploadLoading = false;
        state.error = action.error.message;
      });
  },
});

export default mediaSlice.reducer;
