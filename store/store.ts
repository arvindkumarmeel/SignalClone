import {configureStore} from '@reduxjs/toolkit';
import {setAutoFreeze} from 'immer';
import {useDispatch} from 'react-redux';
import rootReducer from '../reducers/rootReducer';
setAutoFreeze(false);
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch();

export default store;
