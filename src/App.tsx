
import LoginPage from 'pages/LoginPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/admin">

      </Route>

    </Switch>
  );
}

export default App;
