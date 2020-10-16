import { createSlice } from '@reduxjs/toolkit';

export const validatorSlice = createSlice({
  name: 'validate',
  initialState: {
    seal: ""
  },
  reducers: {
    setSeal: (state, action) => {
      state.seal = action.payload;
    },
    reset: state => {
      state.seal = "";
    }
  }
});

export const { 
  setSeal, 
  reset
} = validatorSlice.actions;

// Selectors
export const selectSeal = state => state.validator.seal;
export const selectValidator = state => state.validator;

export default validatorSlice.reducer;
