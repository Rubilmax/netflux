import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className="nav-link"><NavLink to="/home" activeClassName="nav-link-active">Accueil</NavLink></li>
          <li className="nav-link"><NavLink to="/movies" activeClassName="nav-link-active">Films</NavLink></li>
          <li className="nav-link"><NavLink to="/suggests" activeClassName="nav-link-active">Suggestions</NavLink></li>
          <li className="nav-link"><NavLink to="/login" activeClassName="nav-link-active">Connexion</NavLink></li>
          <li className="nav-link"><NavLink to="/register" activeClassName="nav-link-active">Inscription</NavLink></li>
        </ul>
      </div>
    );
}

export default Navbar;