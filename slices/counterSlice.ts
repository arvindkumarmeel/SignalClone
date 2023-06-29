import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState = {
    typename:'login'
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.isLoading = payload;
    },
    setTheme: (state, {payload}) => {
      state.defaultTheme = payload;
    },
    setColors: (state, {payload}) => {
      state.colors = payload;
    },
    setTypename: (state, {payload}) => {
        state.typename = payload;
      },
  },
});

export const {setTypename} = counterSlice.actions;

export default counterSlice.reducer;
