import { createSlice } from "@reduxjs/toolkit";

import { getContact, sendContact, sendFullContact } from "./extraReducer";

const initialState = {
  loading: false,
  contactData: {},
  sendData: null,
  sendLoading: true,
  sendFullData: null,
  sendFullLoading: true,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContact: (state) => {
      state.sendData = null;
      state.sendFullData = null;
    },
  },
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
        state.sendLoading = true;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.sendLoading = false;
        state.sendData = action.payload;
        console.log(action.payload);
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.sendLoading = false;
        state.error = action.error.message;
      });

    build
      .addCase(sendFullContact.pending, (state) => {
        state.sendFullLoading = true;
      })
      .addCase(sendFullContact.fulfilled, (state, action) => {
        state.sendFullLoading = false;
        state.sendFullData = action.payload;
        console.log(action.payload);
      })
      .addCase(sendFullContact.rejected, (state, action) => {
        state.sendFullLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
