import React from 'react';
import axios from "axios";
import cookie from 'react-cookies';
import './Movie.css';

class Movie extends React.Component {
    
    constructor(props) {
        super()
        this.state = { message: '', movie_id: props.match.params.movie_id, movie: {}, mark: {} };

        this.logmark = this.logmark.bind(this);
        this.getMovie();
        this.getMark();
    }

    getMovie() {
        return axios.get(`http://localhost:5000/api/movie/${ this.state.movie_id }`)
            .then(response => this.setState({ movie: response.data.movie }));
    }

    getMark() {
        return axios.get(`http://localhost:5000/api/mark/${ this.state.movie_id }/${ cookie.loadAll("user_id").user_id }`)
            .then(response => this.setState({ mark: response.data.mark }));
    }

    logmark(event) {
        if(this.state.mark.note >= 0) {
            axios.put(`http://localhost:5000/api/mark/${ this.state.movie_id }/${ cookie.loadAll("user_id").user_id }`, { note: event.target.note.value } )
                .then(response => {
                    this.setState({ message: 'Vous avez noté ce film !', mark: response.data.mark });
                    this.getMovie();
                });
        } else {
            axios.post(`http://localhost:5000/api/mark/${ this.state.movie_id }/${ cookie.loadAll("user_id").user_id }`, { note: event.target.note.value } )
                .then(response => {
                    this.setState({ message: 'Vous avez noté ce film !', mark: response.data.mark });
                    this.getMovie();
                });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="movie">
                <h1 className="movie-title">{ this.state.movie.title }</h1>
                <h3 className="movie-desc">Réalisé par <i>{ this.state.movie.author }</i> en { this.state.movie.release_year }</h3>
                <p className="movie-mark">Note moyenne des téléspectateurs : { this.state.movie.average_mark } &#9733;</p>
                { this.state.mark.note >= 0 &&
                    <p className="movie-mark">Votre note : { this.state.mark.note } &#9733;</p>
                }
                <div className="movie">
                    <h1>Noter le film</h1>

                    <form id="mark-form" onSubmit={ this.logmark } >
                        <input id="movie-input" name="note" type="number" min="0" max="5" placeholder="Note" />
                        <input id="movie-btn" type="submit" value="Noter" />
                    </form>
            
                    { this.state.message &&
                        <div className="message">
                            { this.state.message }
                        </div>
                    }

                </div>
            </div>
        );
    }

}

export default Movie;