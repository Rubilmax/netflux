import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './Movies.css';
import loader from '../loader.gif';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = { search: '', movies: [], shown: [] }

        this.handleSearch = this.handleSearch.bind(this);
        this.search = this.search.bind(this);
        this.getMovies();
    }

    handleSearch(event) {
        this.setState({
            search: event.target.value,
            shown: event.target.value ? this.state.movies.filter(movie =>
                movie.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
                : this.state.movies
        });
    }

    search(event) {
        event.preventDefault();
    }

    getMovies() {
        return axios.get('http://localhost:5000/api/movies').then(response =>
            this.setState({ movies: response.data.movies, shown: response.data.movies }));
    }

    render() {
        return (
            <div className="movies-body">
                <div className="search">
                    <form className="search-form" onSubmit={ this.search } >
                        <input id="search-input" name="search-input" type="text" value={ this.state.search } onChange={ this.handleSearch } placeholder="Rechercher un film" required />
                        <input id="search-btn" type="submit" value="&#x1F50D;" />
                    </form>
                </div>
                
                <div className="movies">
                    { this.state.movies.length ? this.state.shown.map(movie =>
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

export default Movies;