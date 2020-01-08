import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home';
import Menu from './components/menu';
import Breakfast from './components/breakfast';
import './style.css';

  export default function App() {
    return (
      <Router>
        <div className="whole">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/breakfast">Breakfast</Link>
            </li>
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
        </Switch>
      </div>
    </Router>
  );
}

