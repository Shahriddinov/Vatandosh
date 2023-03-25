import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_CONTACT, SEND_CONTACT } from "../../services/api/utils";

export const sendContact = createAsyncThunk("sendContact", async (payload) => {
  return await axios
    .post(SEND_CONTACT, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
});

export const getContact = createAsyncThunk("contact/get", async () => {
  return await axios.get(GET_CONTACT).then((res) => res.data);
});
