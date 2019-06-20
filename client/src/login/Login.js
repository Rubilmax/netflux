import React from "react";
import axios from 'axios';

import './Login.css';

class Login extends React.Component {

    constructor() {
        super();

        this.login = this.login.bind(this);
    }

    login(event) {
        axios.post('http://localhost:5000/api/login', { email: event.target.value }).then(response => window.location = "http://localhost:3000").catch(error => console.log(error));
        event.preventDefault();
    }

    render() {
        return (
            <div className="login">
                <h1>Connexion</h1>
                <form action="" id="login-form" method="" onSubmit={ this.login } >
                    <input id="login-input" type="text" placeholder="Adresse e-mail" required />
                    <input id="login-btn" type="submit" value="Connexion" />
                </form>
            </div>
        );
    }
}


export default Login;
