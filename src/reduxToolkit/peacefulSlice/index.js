import { createSlice } from "@reduxjs/toolkit"
import { getPeaceful } from "./peacefulExtraReducer"



const initialState = {
    peacefulData: [],
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
            })
    }
})


export default peacefullSlice.reducer