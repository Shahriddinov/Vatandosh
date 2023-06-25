import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api/axios";
import { GET_CABINET_EXPERT_ACTIVITY } from "../../../services/api/utils";

export const cabinetExpertActivityGet = createAsyncThunk(
  "cabinetExpertActivityGet",
  async () => {
    return await axios.get(GET_CABINET_EXPERT_ACTIVITY).then((res) => res.data);
  }
);
