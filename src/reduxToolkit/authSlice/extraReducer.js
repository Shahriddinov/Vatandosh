import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import {
  GET_NATIONS,
  LOGIN,
  REGISTER,
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
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
        },
        mode: "no-cors",
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

// Register User
export const registerUser = createAsyncThunk(
  "registerUser",
  async (payload) => {
    return await axios
      .post(REGISTER, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  }
);

// Get all nations
export const getAllNations = createAsyncThunk("getNations", async () => {
  return await axios.get(GET_NATIONS).then((res) => res.data);
});
