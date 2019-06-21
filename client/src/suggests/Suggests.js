import React from "react";
import axios from 'axios';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

import './Suggests.css';
import loader from '../loader.gif';

class Suggests extends React.Component {

    constructor() {
        super();
        this.state = { movies: [] }

        this.getMovies();
    }

    getMovies() {
        axios.get(`http://localhost:5000/api/user/${ cookie.load("user_id") }`)
            .then(response => {
                this.setState({ seen_movies: response.data.user.seen_movies.map(movie => movie.movie_id) });
                axios.get('http://localhost:5000/api/movies').then(response =>
                    this.setState({ movies: response.data.movies.filter(movie => this.state.seen_movies.indexOf(movie.movie_id) === -1) }));
            });
    }

    render() {
        return (
            <div className="movies-body">
                <h1 className="title">Suggestions</h1>                
                <div className="movies">
                    { this.state.movies.length ? this.state.movies.map(movie =>
                    <Link to={ `/movies/${ movie.movie_id }` } key={ movie.movie_id } >
                        <div className="movie">
                            <h3 className="movie-title">{ movie.title }</h3>
                            <p className="movie-author">{ movie.author }</p>
                            <i className="movie-year">{ movie.release_year }</i>
                            <p className="movie-mark">{ movie.average_mark } &#9733;</p>
                        </div>
                    </Link>) : <img className="loader" src={ loader } alt="Loader" /> }
                </div>
            </div>
        );
    }
}

export default Suggests;