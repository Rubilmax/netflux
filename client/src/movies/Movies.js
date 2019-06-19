import React from "react";
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
            <div>
                <h1>Films</h1>
                { this.state.movies.map(movie => <p>{ movie.title }</p>) }
            </div>
        );
    }

}

export default Movies;