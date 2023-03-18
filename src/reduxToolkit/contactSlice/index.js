import { createSlice } from "@reduxjs/toolkit";

import { getContact, sendContact } from "./extraReducer";

const initialState = {
  loading: false,
  contactData: {},
  sendData: null,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactData = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    build
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.loading = false;
        state.sendData = action.payload;
        alert("The contact has sent successfully");
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
