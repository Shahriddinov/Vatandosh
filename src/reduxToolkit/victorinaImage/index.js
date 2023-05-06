import { createSlice } from "@reduxjs/toolkit";
import { mediaVictorinaImage } from "./media-upload";

const initialState = {
  communityImagePost: {},
  communityImagePostStatus: null,
  communityImagePostLoading: false,

  error: null,
};

const mediaSlice = createSlice({
  name: "mediaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mediaVictorinaImage.pending, (state) => {
        state.communityImagePostLoading = true;
        state.communityImagePostStatus = null;
      })
      .addCase(mediaVictorinaImage.fulfilled, (state, action) => {
        state.communityImagePostLoading = false;
        state.communityImagePost = action.payload;
        state.communityImagePostStatus = "success";
        console.log(state);
      })
      .addCase(mediaVictorinaImage.rejected, (state, { error }) => {
        state.communityImagePostLoading = false;
        state.communityImagePostStatus = "error";
        state.error = error.message;
      });

    builder.addDefaultCase((state) => state);
  },
});

export default mediaSlice.reducer;
