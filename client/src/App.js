import React from 'react';
import logo from './logo1.png';
import './App.css';

function Home() {
  return (
    <div className="App">
    <div class="recherche_p">

    <form action="/search" id="searchthis" method="get">
    <input id="search" name="q" type="text" placeholder="Title" />
    <input id="search-btn" type="submit" value="Rechercher" />
    </form>

    </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NETFLUX AND CHULL
        </p>
      </header>
    </div>
  );
}

  
export default Home;
