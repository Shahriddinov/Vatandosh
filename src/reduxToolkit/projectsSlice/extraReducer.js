import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

import { SEND_PROJECT } from '../../services/api/utils';

export const sendFormData = createAsyncThunk(
  "formData/sendFormData",
  async (payload) => {
    return await axios
      .post(SEND_PROJECT, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
  }
);