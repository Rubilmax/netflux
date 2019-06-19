import React from "react";
import './Login.css';

function Login() {
    return (
        <div class="Login">
        <div>Connexion</div>
        <div class="Connection">
            <form action="/search" id="searchthis" method="get">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Adresse e-mail" />
            </form>
            <button type="submit" class="registerbtn">Se Connecter</button>
        </div>
        </div>
    );
}


export default Login;
