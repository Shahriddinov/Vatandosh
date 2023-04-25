import { createSlice } from '@reduxjs/toolkit';
import { sendFormData } from './extraReducer';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    data: [],
    status: 'idle',
    loading: true,
    error: null,
  },
  reducers: {
    changeStatus: (state,action) => {       
        state.status = 'idle';
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.loading = true;        
        state.status = 'idle';
      })
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false
        state.data = action.payload;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.loading =false
        state.error = action.error.message;
      });
  },
});
export const {changeStatus} = formDataSlice.actions

export default formDataSlice.reducer;