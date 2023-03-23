import { createSlice } from "@reduxjs/toolkit"
import { getCountries, mapGetData } from "./mapAsyncThunk"

const initialState = {
    mapDataLoading: false,
    countriesLoading: false,
    error:"",
    mapData:[],
    countries: [],
}

const mapSlice = createSlice({
    name: "mapSlice",
    initialState,
    reducers: {},
    extraReducers: build => {
        build
            .addCase(mapGetData.pending, (state) => {
                state.mapDataLoading = true
            })
            .addCase(mapGetData.fulfilled, (state,{payload} ) => {
                state.mapDataLoading = false
                state.mapData = payload.data
            })
            .addCase(mapGetData.rejected, (state,action) => {
                state.mapDataLoading = false
                state.error = action.error.message
            });
        build
            .addCase(getCountries.pending, (state) => {
                state.countriesLoading = true
            })   
            .addCase(getCountries.fulfilled, (state,{payload}) => {
                state.countries = payload.data;
                state.countriesLoading = false;
            }) 
            .addCase(getCountries.rejected, (state,action) => {
                state.error = action.error.message
                state.countriesLoading = false
            })
        
    }
})


export default mapSlice.reducer