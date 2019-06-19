import React from "react";
import logo from '../logo.png';
import './Home.css';

function Home() {
    return (
        <div class="home">
            <div class="recherche_p">
            <form action="/search" id="searchthis" method="get">
                <input id="search" name="q" type="text" placeholder="Title" />
                <input id="search-btn" type="submit" value="Rechercher" />
            </form>
            </div>
    
            <div class="App-header">
                <img src={logo} class="App-logo" alt="logo" />
                <p>NETFLUX AND CHULL</p>
            </div>
        </div>
    );
}

export default Home;