import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Navbar from "../navbar/Navbar";
import Account from "../account/Account";
import Register from "../register/Register";
import Movies from "../movies/Movies";
import Movie from '../movie/Movie';
import Suggests from "../suggests/Suggests";
import Home from "../home/Home";

function App() {
  return (
    <div className="app-body">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact strict path="/movies" component={Movies} />
        <Route path="/suggests" component={Suggests} />
        <Route path="/account" component={Account} />
        <Route path="/register" component={Register} />
        
        <Route path="/movies/:movie_id" component={Movie} />
      </BrowserRouter>
    </div>
  );
}

export default App;
