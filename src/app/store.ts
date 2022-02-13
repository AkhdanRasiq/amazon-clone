import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice'
import alertReducer from '../features/alertSlice'

export const store = configureStore({
  reducer: {
    products  : productReducer,
    alert     : alertReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
