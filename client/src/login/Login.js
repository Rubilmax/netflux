import React from "react";

import './Login.css';

function Login() {
    return (
        <div className="login">
            <h1>Connexion</h1>
            <form action="" id="login-form" method="post">
                <input id="login-input" type="text" placeholder="Adresse e-mail" />
                <input id="login-btn" type="submit" value="Connexion" />
            </form>
        </div>
    );
}


export default Login;
