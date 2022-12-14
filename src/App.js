import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/project-trybewallet/"
        component={ Login }
      />
      <Route
        exact
        path="/project-trybewallet/carteira"
        component={ Wallet }
      />
    </Switch>
  );
}
export default App;
