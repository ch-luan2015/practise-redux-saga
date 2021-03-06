
import cityApi from 'api/citiApi';
import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';



function App() {

  useEffect(() => {
    cityApi.getAll().then(res => console.log(res.data));
  })
  return (
    <>
      <Switch>

        <Route exact path="/">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
