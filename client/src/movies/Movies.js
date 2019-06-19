import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Movie from '../movie/Movie';
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
            <Router>
                <div class="movies">
                    { this.state.movies.map(movie =>
                    <div class="movie" key={ movie.movie_id } >
                        <h3 class="movie-title"><Link to={ `/movies/${ movie.movie_id }` }>{ movie.title }</Link></h3>
                        <p class="movie-author">{ movie.author }</p>
                        <i class="movie-year">{ movie.release_year }</i>
                    </div>) }
                </div>

                <Route path="/movies/:movie_id" component={Movie} />
            </Router>
        );
    }
}

export default Movies;