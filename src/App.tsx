
import cityApi from 'api/citiApi';
import studentsApi from 'api/studentsApi';
import AdminPage from 'pages/AdminPage';
import LoginPage from 'pages/LoginPage';
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
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>

      </Switch>
    </>
  );
}

export default App;
