import { createSlice } from '@reduxjs/toolkit';

export const generatorSlice = createSlice({
  name: 'generate',
  initialState: {
    profileId: "",
    codeId: "",
    author: "",
    description: ""
  },
  reducers: {
    setProfileId: (state, action) => {
      state.profileId = action.payload;
    },
    setCodeId: (state, action) => {
      state.codeId = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    reset: state => {
      state.profileId = "";
      state.codeId = "";
      state.author = "";
      state.description = "";
    }
  }
});

export const { 
  setProfileId, 
  setCodeId, 
  setAuthor, 
  setDescription, 
  reset
} = generatorSlice.actions;

// Selectors
export const selectProfileId = state => state.generator.profileId;
export const selectCodeId = state => state.generator.codeId;
export const selectAuthor = state => state.generator.author;
export const selectDescription = state => state.generator.description;
export const selectGenerator = state => state.generator;

export default generatorSlice.reducer;
