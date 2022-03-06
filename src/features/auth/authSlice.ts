import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'model/user';

interface AuthState {
  logging?: boolean,
  isLogged?:boolean,
  currentUser?:User
}

const initialState:AuthState = { 
  logging: false,
  isLogged:false,
  currentUser:undefined
 } 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },
})

// !Dinh nghia actions cua auth la 1 bien chua tat ca cac action cua object authSlice
// !Actions
export const authActions = authSlice.actions;

//! Selector

// export const selectCurrentUser = (state)=

// Reducer
const authReducer = authSlice.reducer
export default authReducer;
