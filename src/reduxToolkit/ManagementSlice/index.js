import {createSlice} from "@reduxjs/toolkit";
import {getManagement} from "./ManagementSlice";

const initialState = {
    managementData: [],
    loadingManagement: true,
    error: null,
}
const managementSlice = createSlice({
    name: "managements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getManagement.pending, (state) => {
                state.loadingManagement = true;
            })
            .addCase(getManagement.fulfilled, (state, action) => {
                state.managementData = false;
                state.loadingManagement = action.payload;
            })
            .addCase(getManagement.rejected, (state, action)=>{
                state.loadingManagement= false;
                state.error = action.error.message;
            })
    }
});
export default managementSlice.reducer