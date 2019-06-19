import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import './Movies.css';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = { movies: [] }
        this.getMovies();
    }

    getMovies() {
        return axios.get('http://localhost:5000/api/movies').then(response => this.setState({ movies: response.data.movies }));
    }

    render() {
        return (
            <div class="movies">
                { this.state.movies.map(movie =>
                <Link to={ `/movies/${ movie.movie_id }` }>
                    <div class="movie" key={ movie.movie_id } >
                        <h3 class="movie-title">{ movie.title }</h3>
                        <p class="movie-author">{ movie.author }</p>
                        <i class="movie-year">{ movie.release_year }</i>
                        <p class="movie-mark">{ movie.average_mark } &#9733;</p>
                    </div>
                </Link>) }
            </div>
        );
    }
}

export default Movies;