import { createSlice } from "@reduxjs/toolkit";

import { getDirection } from "./Direction";

const initialState = {
    loading: true,
    directionData: [],
    error: null,
};

const directionSlice = createSlice({
    name: "directions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDirection.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDirection.fulfilled, (state, action) => {
                state.loading = false;
                state.directionData = action.payload;
            })
            .addCase(getDirection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default directionSlice.reducer;
