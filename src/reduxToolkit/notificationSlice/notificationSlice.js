import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
};

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {
    openNotification: (state, { payload }) => {
      state.open = payload;
    },
    closeNotification: (state, { payload }) => {
      state.open = payload;
    },
  },
});

export const { openNotification, closeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
