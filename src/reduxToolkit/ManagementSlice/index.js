import {createSlice} from "@reduxjs/toolkit";
// import {getma} from "./About";
import {getManagement} from "./ManagementSlice";

const initialState = {
    loading: true,
    managementData: [],
    error: null,
};

const managementSlice = createSlice({
    name: "managements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getManagement.pending, (state) => {
                state.loading = true;
            })
            .addCase(getManagement.fulfilled, (state, action) => {
                state.loading = false;
                state.managementData = action.payload;
            })
            .addCase(getManagement.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default managementSlice.reducer