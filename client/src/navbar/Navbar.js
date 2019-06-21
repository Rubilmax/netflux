import React from "react";
import cookie from 'react-cookies';
import { Link, NavLink } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className="nav-link"><NavLink exact to="/" activeClassName="nav-link-active">Accueil</NavLink></li>
          <li className="nav-link"><NavLink to="/movies" activeClassName="nav-link-active">Films</NavLink></li>
          { !cookie.load('user_id') ?
            <ul className="nav-link nav-member">
              <li className="nav-link"><NavLink to="/account" activeClassName="nav-link-active">Connexion</NavLink></li>
              <li className="nav-link"><NavLink to="/register" activeClassName="nav-link-active">Inscription</NavLink></li>
            </ul> :
            <ul className="nav-link nav-member">
              <li className="nav-link"><NavLink to="/suggests" activeClassName="nav-link-active">Suggestions</NavLink></li>
              <li className="nav-link"><NavLink to="/account" activeClassName="nav-link-active">Espace membre</NavLink></li>
              <li className="nav-link"><Link to="/" onClick={ () => {
                cookie.remove("user_id");
                window.location.reload();
              } } >Déconnexion</Link></li>
            </ul>
          }
        </ul>
      </div>
    );
}

export default Navbar;