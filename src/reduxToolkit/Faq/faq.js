import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_FAQ_URL} from "../../services/api/utils";

export const getFaq = createAsyncThunk("faq/get", async () => {
    return await axios.get(GET_FAQ_URL).then((res) => res.data)
})