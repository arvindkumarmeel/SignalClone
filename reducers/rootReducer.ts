import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

export type RootState = ReturnType;

export default rootReducer;
