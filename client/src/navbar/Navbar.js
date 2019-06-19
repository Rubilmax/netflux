import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Navbar.css';

import Login from "../login/Login";
import Register from "../register/Register";
import Movies from "../movies/Movies";
import Interests from "../interests/Interests";
import Home from "../home/Home";

function Navbar() {
    return (
        <Router>
          <div class="navbar">
            <ul class="nav-links">
              <li class="nav-link"><NavLink to="/home" activeClassName="nav-link-active">Accueil</NavLink></li>
              <li class="nav-link"><NavLink to="/movies" activeClassName="nav-link-active">Films</NavLink></li>
              <li class="nav-link"><NavLink to="/suggests" activeClassName="nav-link-active">Suggestions</NavLink></li>
              <li class="nav-link"><NavLink to="/login" activeClassName="nav-link-active">Connexion</NavLink></li>
              <li class="nav-link"><NavLink to="/register" activeClassName="nav-link-active">Inscription</NavLink></li>
            </ul>
          </div>
          
          <Route exact path="/home" component={Home} />
          <Route exact strict path="/movies" component={Movies} />
          <Route path="/suggests" component={Interests} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
    );
}

export default Navbar;