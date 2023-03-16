import { createSlice } from "@reduxjs/toolkit"
import { getInteractiveServices, getPeaceful } from "./peacefulExtraReducer"



const initialState = {
    peacefulData: [],
    interactiveServices: [],
    interactiveServicesLoading:false,
    loading: false,
    error: "",
}


const peacefullSlice = createSlice({
    name: "peacefulSlice",
    initialState,
    reducers: {

    },
    extraReducers: build => {
        build
            .addCase(getPeaceful.pending, (state) => {
                state.loading = true
            })
            .addCase(getPeaceful.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.peacefulData = payload.data
            })
            .addCase(getPeaceful.rejected, (state,{error}) => {
                state.error = error.message
                state.loading = false
            });
        build
            .addCase(getInteractiveServices.pending, (state) => {
                state.interactiveServicesLoading = true
            })
            .addCase(getInteractiveServices.fulfilled, (state,{payload}) => {
                state.interactiveServicesLoading = false
                state.interactiveServices = payload.data
            })
            .addCase(getInteractiveServices.rejected, (state,action) => {
                state.interactiveServicesLoading = false
                state.error = action.error.message
            })
    }
})


export default peacefullSlice.reducer