import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_FAMOUS_TAGS } from "../../services/api/utils";

export const getTags = createAsyncThunk("tags/getFamoustags", async () => {
  return await axios.get(GET_FAMOUS_TAGS).then((res) => res.data);
});
