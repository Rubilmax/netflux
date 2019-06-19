import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
              <li class="nav-link"><Link to="/">Accueil</Link></li>
              <li class="nav-link"><Link to="/movies">Films</Link></li>
              <li class="nav-link"><Link to="/interests">Recommandations</Link></li>
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/interests" component={Interests} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
    );
}

export default Navbar;