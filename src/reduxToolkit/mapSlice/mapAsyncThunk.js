import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_COUNTRIES, GET_MAP_DATA_URL } from "../../services/api/utils";


export const mapGetData = createAsyncThunk("map/getData", async (payload) => {
    return axios.get(GET_MAP_DATA_URL + payload).then(res => res.data)
})

export const getCountries = createAsyncThunk("map/countries", async () => {
    return axios.get(GET_COUNTRIES).then(res => res.data)
})