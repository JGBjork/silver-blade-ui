import { configureStore } from '@reduxjs/toolkit';
import generatorReducer from './store/generatorSlice';
import validatorReducer from './store/validatorSlice';
import renewalReducer from './store/renewalSlice';

export default configureStore({
  reducer: {
    generator: generatorReducer,
    validator: validatorReducer,
    renewal: renewalReducer
  },
});
