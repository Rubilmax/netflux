import React from "react";

import logo from '../logo.png';
import './Home.css';

function Home() {
    return (
        <div className="home-body">
            <div className="home-logo">
                <img src={logo} alt="logo" />
                <p>NETFLUX & CHULL</p>
            </div>
        </div>
    );
}

export default Home;
