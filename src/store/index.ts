import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default store;
