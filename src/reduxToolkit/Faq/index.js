import {createSlice} from "@reduxjs/toolkit";
import {getFaq} from "./faq";

const initialState = {
    loading: true,
    faqData: [],
    error: null,
};
const faqSlice = createSlice({
    name: "faq",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFaq.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFaq.fulfilled, (state, action) => {
                state.loading = false;
                state.faqData = action.payload;
            })
            .addCase(getFaq.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export default faqSlice.reducer;