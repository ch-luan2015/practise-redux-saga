
import AdminPage from 'pages/AdminPage';
import LoginPage from 'pages/LoginPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
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
