import { createSlice } from "@reduxjs/toolkit";
import {
  getAllNations,
  recoverPassword,
  registerUser,
  resetPassword,
  sendEmail,
  setPassword,
  signIn,
  verifyToken,
} from "./extraReducer";
import { getItem, setItem } from "../../helpers/persistanceStorage";

const initialState = {
  emailLoading: false,
  verifyLoading: true,
  passwordLoading: true,
  loginLoading: true,
  resetLoading: false,
  registerLoading: false,
  registerData: null,
  userData: getItem("user") ? JSON.parse(getItem("user")) : null,
  nationsData: null,
  nationsLoading: true,
  token: localStorage.getItem("token"),
  message: "",
  tokenMessage: null,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
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
        state.userData = action.payload.user;
        setItem("token", action.payload.token);
        setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.passwordLoading = false;
        state.error = action.error.message;
      });

    // Sign In
    build
      .addCase(signIn.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.token = action.payload.token;
        if (action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.userData = action.payload.user;
          setItem("token", action.payload.token);
          setItem("user", JSON.stringify(action.payload.user));
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.message;
      });

    // Reset Password
    build
      .addCase(resetPassword.pending, (state) => {
        state.resetLoading = true;
        state.message = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetLoading = false;

        if (action.payload.errors) {
          state.error = action.payload.errors.email;
          // alert(action.payload.errors.email);
        } else {
          state.message = action.payload.message;
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetLoading = false;
        state.error = action.error.message;
      });

    // Recover Password
    build
      .addCase(recoverPassword.pending, (state) => {
        state.resetLoading = true;
      })
      .addCase(recoverPassword.fulfilled, (state, action) => {
        state.resetLoading = false;
        if (action.payload.errors) {
          state.error = action.payload.errors.message;
          // alert(action.payload.errors.message);
        } else {
          state.message = action.payload.message;
          state.success = true;
        }
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.resetLoading = false;
        state.error = action.error.message;
      });

    // Register User
    build
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.registerData = action.payload;
        setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.error = action.error.message;
      });

    // Get all nations
    build
      .addCase(getAllNations.pending, (state) => {
        state.nationsData = true;
      })
      .addCase(getAllNations.fulfilled, (state, action) => {
        state.nationsLoading = false;
        state.nationsData = action.payload;
      })
      .addCase(getAllNations.rejected, (state, action) => {
        state.nationsLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
