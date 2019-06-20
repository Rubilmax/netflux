import React from "react";
import axios from 'axios';
import cookie from 'react-cookies';

import './Account.css';

class Account extends React.Component {

    constructor() {
        super();
        this.state = { message: '', user: {} };

        this.login = this.login.bind(this);
        if(cookie.load("user_id")) {
            this.getMember();
        }
    }

    login(event) {
        axios.post('http://localhost:5000/api/login', { email: event.target.children[0].value })
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
                            <input id="login-input" type="text" placeholder="Adresse e-mail" required />
                            <input id="login-btn" type="submit" value="Connexion" />
                        </form>
        
                        { this.state.message &&
                            <div className="message">
                                { this.state.message }
                            </div>
                        }
                    </div> :
                    <div className="member">
                        <h1>Mon compte</h1>
                        <p>Bienvenue sur votre page personnelle, { this.state.user.first_name } !</p>
                        <h3>Les films que vous avez déjà vu</h3>
                    </div>
                }
            </div>
        );
    }
}


export default Account;
