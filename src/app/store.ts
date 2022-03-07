import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
//Router
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

// then run the saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
