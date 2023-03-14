import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_PARTNERS_URL } from "../../services/api/utils";

export const getPartners = createAsyncThunk("partners/get", async () => {
  return await axios.get(GET_PARTNERS_URL).then((res) => res.data);
});
