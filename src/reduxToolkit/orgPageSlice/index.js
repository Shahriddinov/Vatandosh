import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  btnToggle: false,
};

const orgPageSlice = createSlice({
  name: "orgPageSlice",
  initialState,
  reducers: {
    btnHandler: (state, action) => {
      state.btnToggle = !state.btnToggle;
    },
  },
});

export const { btnHandler } = orgPageSlice.actions;

export default orgPageSlice.reducer;
