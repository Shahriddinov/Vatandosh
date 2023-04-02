import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {GET_DIRECTION} from "../../services/api/utils";

export const getDirection = createAsyncThunk("directions/get", async () => {
    return await axios.get(GET_DIRECTION).then((res) => res.data);
});
