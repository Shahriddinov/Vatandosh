import { createSlice } from "@reduxjs/toolkit"
import { getAllTrustees } from "./trusteesAsyncThunk"


const initialState = {
    allTrustees: [],
    allTrusteesLoading: false,
    error: "",
}


const trusteesSlice = createSlice({
    name: "trusteesSlice",
    initialState,
    reducers:{},
    extraReducers: build => {
        build
            .addCase(getAllTrustees.pending, state => {
                state.allTrusteesLoading = true;
            })
            .addCase(getAllTrustees.fulfilled, (state,{payload}) => {
                state.allTrustees = payload;
                state.allTrusteesLoading = false;
            })
            .addCase(getAllTrustees.rejected, (state,{error}) => {
                state.allTrusteesLoading = false;
                state.error = error.message;
            })
    }
})

export default trusteesSlice.reducer