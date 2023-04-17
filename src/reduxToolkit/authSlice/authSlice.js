import { createSlice } from "@reduxjs/toolkit";
import { sendEmail, setPassword, signIn, verifyToken } from "./extraReducer";

const initialState = {
  emailLoading: false,
  verifyLoading: true,
  passwordLoading: true,
  loginLoading: true,
  userData: null,
  token: localStorage.getItem("token"),
  message: "",
  tokenMessage: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // Sign Up
    build
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        if (action.message) {
          state.message = action.message;
        } else {
          state.message = action.payload.message;
        }
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.message = action.message;
      });

    // Verify Token
    build
      .addCase(verifyToken.pending, (state) => {
        state.verifyLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.verifyLoading = false;
        state.tokenMessage = action.payload.message;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.verifyLoading = false;
        state.tokenMessage = action.error.message;
      });

    // Set Password
    build
      .addCase(setPassword.pending, (state) => {
        state.passwordLoading = true;
      })
      .addCase(setPassword.fulfilled, (state, action) => {
        state.passwordLoading = false;
        state.token = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.passwordLoading = false;
        state.error = action.error.message;
      });

    // Sign In
    build
      .addCase(signIn.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loginLoading = false;
        if (action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.userData = action.payload;
          state.token = action.token;
          localStorage.setItem("token", action.token);
        }
        console.log(action.payload);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.message;
      });
  },
});

export default authSlice.reducer;
