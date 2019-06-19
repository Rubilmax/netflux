import React from "react";
import logo from '../logo.png';
import './Home.css';

function Home() {
    return (
        <div class="home">

    
            <div class="App-header">
                <img src={logo} class="App-logo" alt="logo" />
                <p>NETFLUX AND CHULL</p>
            </div>

            <div class="recherche_p">
            <form action="/search" id="searchthis" method="get">
                <input id="search" name="q" type="text" placeholder="Titre du film" />
                <input id="search-btn" type="submit" value="Recherche &#x1F50D;" />
            </form>
            </div>
        </div>
    );
}

export default Home;
