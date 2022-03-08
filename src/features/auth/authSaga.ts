import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";
import { push } from "connected-react-router";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  try {
    //Phase 1 login
    yield delay(500);
    localStorage.setItem("token", "12122133");

    //Phase 2 gui payload xuong success
    yield put(authActions.loginSuccess(payload));
    localStorage.setItem("currentUser", JSON.stringify(payload));

    //Phase 3: Redirect to admin Page
    yield put(push("/admin"));
  } catch (error: any) {
    console.log(error.message);
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");

  // redirect to login page
  yield put(push("/"));
}

function* watchLoginFlow() {
  while (true) {
    const isLogin = Boolean(localStorage.getItem("token"));

    if (!isLogin) {
      //Cho co user thuc hien 1 action (type) va lay no bang take de thuc hien lenh sau;
      console.log("authActions.login.type", authActions.login.type);
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    // Neu login roi thi doi user thuc hien 1 acction co type logout
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
