import React from "react";
import logo from '../logo.png';
import './Home.css';

function Home() {
    return (
        <div class="home-body">
            <div class="home-logo">
                <img src={logo} alt="logo" />
                <p>NETFLUX & CHULL</p>
            </div>

            <div class="search">
                <form action="/search" class="search-form" method="get">
                    <input id="search-input" name="search-input" type="text" placeholder="Rechercher un film" required />
                    <input id="search-btn" type="submit" value="&#x1F50D;" />
                </form>
            </div>
        </div>
    );
}

export default Home;
