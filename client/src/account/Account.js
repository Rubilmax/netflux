import React from "react";
import axios from 'axios';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

import './Account.css';
import loader from '../loader.gif';

class Account extends React.Component {

    constructor() {
        super();
        this.state = { message: '', user: undefined };

        this.login = this.login.bind(this);
        if(cookie.load("user_id")) {
            this.getMember();
        }
    }

    login(event) {
        axios.post('http://localhost:5000/api/login', { email: event.target.email.value })
            .then(response => {
                cookie.save("user_id", response.data.user.user_id, { path: "/" });
                window.location.reload();
            })
            .catch(error => this.setState({ message: 'Utilisateur introuvable.' }));
        event.preventDefault();
    }

    getMember() {
        axios.get('http://localhost:5000/api/user/' + cookie.loadAll("user_id").user_id)
            .then(response => this.setState({ user: response.data.user })); 
    }

    render() {
        return (
            <div className="account">
                { !cookie.load("user_id") ?
                    <div className="login">
                        <h1>Connexion</h1>
                        <form id="login-form" onSubmit={ this.login } >
                            <input id="login-input" name="email" type="text" placeholder="Adresse e-mail" required />
                            <input id="login-btn" type="submit" value="Connexion" />
                        </form>
        
                        { this.state.message &&
                            <div className="message">
                                { this.state.message }
                            </div>
                        }
                    </div> :
                    (this.state.user ?
                        <div className="member">
                            <h1>Mon compte</h1>
                            <p>Bienvenue sur votre page personnelle, { this.state.user.first_name } !</p>
                            <div className="container">
                                <h2>Les films que vous avez déjà vus</h2>
                                <div className="seen-movies">
                                    { this.state.user.seen_movies.length ? this.state.user.seen_movies.map(movie =>
                                        <Link to={ `/movies/${ movie.movie_id }` } key={ movie.movie_id } >
                                            <div className="movie">
                                                <h3 className="movie-title">{ movie.title }</h3>
                                                <p className="movie-author">{ movie.author }</p>
                                                <i className="movie-year">{ movie.release_year }</i>
                                                <p className="movie-average">{ movie.average_mark } &#9733;</p>
                                                <p className="movie-mark">Votre note : { movie.mark } &#9733;</p>
                                            </div>
                                        </Link>) : <h3>Aucun !</h3> }
                                </div>
                            </div>
                        </div> : <img className="loader" src={ loader } alt="Loader" />)
                }
            </div>
        );
    }
}


export default Account;
