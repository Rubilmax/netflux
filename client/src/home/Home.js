import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './Home.css';
import logo from '../logo.png';
import loader from '../loader.gif';


class Home extends React.Component {

    constructor() {
        super();
        this.state = { search: '', movies: [], shown: [] }
        this.getMovies();
    }

    getMovies() {
        return axios.get('http://localhost:5000/api/movies').then(response => this.setState({ movies: response.data.movies, shown: response.data.movies }));
    }

    render() {
        return (
            <div className="home-body">
                <div className="home-logo">
                    <img src={logo} alt="logo" />
                    <p>NETFLUX & CHULL</p>
                </div>
                <div className="movies">
                    { this.state.movies.length ? this.state.shown.slice(0,3).map(movie =>
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

export default Home;
