import { createSlice } from "@reduxjs/toolkit";

import { volunterProfile } from "./profileCreate";

const initialState = {
  loading: false,
  contactData: {},
  sendData: null,
  error: null,
};

const volunterCreate = createSlice({
  name: "volunter",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(volunterProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(volunterProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.sendData = action.payload;
        alert("The contact has sent successfully");
      })
      .addCase(volunterProfile.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default volunterCreate.reducer;
