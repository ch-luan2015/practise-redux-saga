import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
//Router
import { connectRouter, routerMiddleware } from "connected-react-router";
import authReducer from "features/auth/authSlice";
import dashboardReducer from "features/dashboard/dashboardSlice";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  dashboard:dashboardReducer
  
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
