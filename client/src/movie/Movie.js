import React from 'react';
import axios from "axios";

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
            <h1>{ this.state.movie.title }</h1>
        );
    }
}

export default Movie;