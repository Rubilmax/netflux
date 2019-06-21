import React from 'react';
import axios from "axios";
import cookie from 'react-cookies';
import './Movie.css';

class Movie extends React.Component {
    
    constructor(props) {
        super()
        this.state = { movie_id: props.match.params.movie_id, movie: {} };
        this.getMovie();
    }

    getMovie() {
        return axios.get(`http://localhost:5000/api/movie/${ this.state.movie_id }`)
            .then(response => this.setState({ movie: response.data.movie }));
    }

    render() {
        return (
            <div className="movie">
                <h1 className="movie-title">{ this.state.movie.title }</h1>
                <p className="movie-desc">Réalisé par <i>{ this.state.movie.author }</i> en { this.state.movie.release_year }</p>
                <p className="movie-mark">Note moyenne des téléspectateurs : { this.state.movie.average_mark } &#9733;</p>
                <div className="movie">

                    <h1>Noter le film</h1>

                    <form id="mark-form" onSubmit={ this.logmark } >
                        <input id="movie-input" type="number" placeholder="Note" />
                        <input id="movie-btn" type="submit" value="Noter" />
                    </form>

                </div>
            </div>
        );
    }

    logmark(event) {
        axios.post('http://localhost:5000/api/mark/' + this.state.movie_id + "/" + cookie.loadAll("movie_id").movie_id + cookie.loadAll("movie_id").movie_id, {mark: event.target.children[0].value} )
            .then(response => {
                cookie.save("mark", response.data.mark, { path: "/" }); 
                window.location.reload();
            })
            .catch(error => this.setState({ message: 'Impossible de noter le film' }));
        event.preventDefault();
    }

}

export default Movie;