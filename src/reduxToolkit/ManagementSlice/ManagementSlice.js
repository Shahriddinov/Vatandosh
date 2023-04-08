import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_MANAGEMENT} from "../../services/api/utils";

export const getManagement = createAsyncThunk("management/get", async () => {
    return await axios.get(GET_MANAGEMENT).then((res) => console.log(res.data));
})