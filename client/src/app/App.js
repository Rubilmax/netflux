import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Navbar from "../navbar/Navbar";
import Login from "../login/Login";
import Register from "../register/Register";
import Movies from "../movies/Movies";
import Movie from '../movie/Movie';
import Interests from "../interests/Interests";
import Home from "../home/Home";

function App() {
  return (
    <div class="app-body">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/home" component={Home} />
        <Route exact strict path="/movies" component={Movies} />
        <Route path="/suggests" component={Interests} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        <Route path="/movies/:movie_id" component={Movie} />
      </BrowserRouter>
    </div>
  );
}

export default App;
