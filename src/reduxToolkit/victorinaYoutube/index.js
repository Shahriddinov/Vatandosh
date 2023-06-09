import { createSlice } from "@reduxjs/toolkit";
import { sendVictorinaYoutube } from "./youtube";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  sendData: null,
  error: null,
};

const victorinaYoutubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(sendVictorinaYoutube.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendVictorinaYoutube.fulfilled, (state, action) => {
        state.loading = false;
        state.sendData = action.payload;
        state.sendData = "success";
        toast.success("This is the information succes done!");
      })
      .addCase(sendVictorinaYoutube.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default victorinaYoutubeSlice.reducer;
