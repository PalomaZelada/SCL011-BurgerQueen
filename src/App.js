import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Mesero from './components/mesero';
import Cocina from './components/cocina';
import Menu from './components/menu';
import Breakfast from './components/breakfast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/cocina">Cocina</Link>
          </li>
          <li>
            <Link to="/mesero">Mesero</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/breakfast">Breakfast</Link>
          </li> */}
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/breakfast">
            <Breakfast />
          </Route>
          <Route path="/mesero">
            <Mesero />
            <Route path="/cocina">
            <Cocina />
          </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
