import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  LOGIN,
  RESET_PASSWORD,
  SEND_EMAIL,
  SET_PASSWORD,
  VERIFY_TOKEN,
} from "../../services/api/utils";

// Sign Up
export const sendEmail = createAsyncThunk(
  "portal/sendEmail",
  async (payload) => {
    return await axios
      .post(SEND_EMAIL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .catch((e) => e.response.data);
  }
);

// Verify Email
export const verifyToken = createAsyncThunk("verifyToken", async (payload) => {
  return await axios.post(VERIFY_TOKEN + payload).then((res) => res.data);
});

// Set Password
export const setPassword = createAsyncThunk("setPassword", async (payload) => {
  return await axios
    .post(SET_PASSWORD, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
});

// Login
export const signIn = createAsyncThunk("signIn", async (payload) => {
  return await axios
    .post(LOGIN, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((e) => e.response.data);
});

// Reset Password
export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (payload) => {
    return await axios
      .post(RESET_PASSWORD, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .catch((e) => e.response.data);
  }
);

// Recover Password
export const recoverPassword = createAsyncThunk(
  "recoverPassword",
  async (payload) => {
    return await axios
      .post(SET_PASSWORD, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
);
