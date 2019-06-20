import React from "react";
import axios from 'axios';

import './Login.css';

class Login extends React.Component {

    constructor() {
        super();
        this.state = { message: '' };

        this.login = this.login.bind(this);
    }

    login(event) {
        axios.post('http://localhost:5000/api/login', { email: event.target.children[0].value }).then(response => window.location = "http://localhost:3000").catch(error => this.setState({ message: 'Utilisateur introuvable.' }));
        event.preventDefault();
    }

    render() {
        return (
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
            </div>
        );
    }
}


export default Login;
