import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  logging?: boolean;
  isLogged?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  logging: false,
  isLogged: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.isLogged = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFaild(state, action) {
      state.logging = false;
      state.isLogged = false;
    },

    logout(state) {
      state.isLogged = false;
      state.currentUser = undefined;
    },
  },
});

// !Dinh nghia actions cua auth la 1 bien chua tat ca cac action cua object authSlice
// !Actions
export const authActions = authSlice.actions;

//! Selector

// export const selectCurrentUser = (state)=

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
