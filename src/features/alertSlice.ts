import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

interface IAlert {
  status      : boolean,
  severity    : AlertColor,
  msg         : string
}

const initialState: IAlert = {
  status      : false,
  severity    : 'success' || 'info' || 'warning' || 'error' || undefined,
  msg         : "Alert is Here!"
}

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<any>) => {
      state.status    = action.payload.status
      state.severity  = action.payload.severity || 'success'
      state.msg       = action.payload.msg      || "Alert is Here!"
    }
  }
})

export const {
  setAlert
} = alertSlice.actions

export const getAlertState = (state: RootState) => state.alert

export default alertSlice.reducer
