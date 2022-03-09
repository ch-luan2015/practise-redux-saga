import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {
}

export function PrivateRoute(props: RouteProps) {

  //Check if user login

  const isLoggedIn = Boolean(localStorage.getItem("token"));
  // if yes, show route
  if (!isLoggedIn) return <Redirect to="/login" />
  // otherwise, redirect to login



  return <Route {...props} />;
}

