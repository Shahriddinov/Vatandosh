import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_EVENTS_URL } from "../../services/api/utils";

export const getEvents = createAsyncThunk("events/get", async () => {
  return await axios.get(GET_EVENTS_URL).then((res) => res.data);
});
