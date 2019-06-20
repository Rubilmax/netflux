import React from 'react';
import axios from "axios";

import './Movie.css';

class Movie extends React.Component {
    
    constructor(props) {
        super()
        this.state = { movie_id: props.match.params.movie_id, movie: {} };
        this.getMovie();
    }

    getMovie() {
        return axios.get(`http://localhost:5000/api/movie/${ this.state.movie_id }`).then(response => this.setState({ movie: response.data.movie }));
    }

    render() {
        return (
            <div className="movie">
                <h1 className="movie-title">{ this.state.movie.title }</h1>
                <p className="movie-desc">Réalisé par <i>{ this.state.movie.author }</i> en { this.state.movie.release_year }</p>
                <p className="movie-mark">Note moyenne des téléspectateurs : { this.state.movie.average_mark } &#9733;</p>
            </div>
        );
    }
}

export default Movie;