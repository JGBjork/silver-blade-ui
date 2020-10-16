import { createSlice } from '@reduxjs/toolkit';

export const renewalSlice = createSlice({
  name: 'renewal',
  initialState: {
    profileId: "",
    codeId: "",
    seal: "",
    renewalKey: ""
  },
  reducers: {
    setProfileId: (state, action) => {
      state.profileId = action.payload;
    },
    setCodeId: (state, action) => {
      state.codeId = action.payload;
    },
    setSeal: (state, action) => {
      state.seal = action.payload;
    },
    setRenewalKey: (state, action) => {
      state.renewalKey = action.payload;
    },
    reset: state => {
      state.profileId = "";
      state.codeId = "";
      state.seal = "";
      state.renewalKey = "";
    }
  }
});

export const { 
  setProfileId, 
  setCodeId, 
  setSeal, 
  setRenewalKey, 
  reset
} = renewalSlice.actions;

// Selectors
export const selectProfileId = state => state.renewal.profileId;
export const selectCodeId = state => state.renewal.codeId;
export const selectSeal = state => state.renewal.seal;
export const selectRenewalKey = state => state.renewal.renewalKey;
export const selectRenewal = state => state.renewal;

export default renewalSlice.reducer;
