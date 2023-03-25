import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_TRUSTEES_URL } from "../../services/api/utils";


export const getAllTrustees = createAsyncThunk("get/AllTrustees", async () => {
    return await axios.get(GET_ALL_TRUSTEES_URL).then(res => res.data)
})