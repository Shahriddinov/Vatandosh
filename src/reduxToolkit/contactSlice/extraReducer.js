import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_CONTACT } from "../../services/api/utils";

export const getContact = createAsyncThunk("contact/get", async () => {
  return await axios.get(GET_CONTACT).then((res) => res.data);
});
