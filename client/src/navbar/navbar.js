import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from "../movies/movies";
import Interests from "../interests/interests";
import Home from "../home/home";

function Navbar() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/movies">Films</Link></li>
              <li><Link to="/interests">Recommandations</Link></li>
            </ul>
    
            <hr />
    
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/interests" component={Interests} />
          </div>
        </Router>
    );
}

export default Navbar;