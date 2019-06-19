import React from "react";

function Register() {
    return (
        <div class="Register">
        <div>Inscription</div>
        <div class="Inscription">
            <form action="/search" id="searchthis" method="post">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Adresse e-mail" />
            </form>

            <form action="/search" id="searchthis" method="post">
                <label for="first_name"><b>Email</b></label>
                <input type="text" placeholder="Prénom" />
            </form>

            <form action="/search" id="searchthis" method="post">
                <label for="last_name"><b>Email</b></label>
                <input type="text" placeholder="Nom de famille" />
            </form>

            <form action="/search" id="searchthis" method="post">
                <label for="age"><b>Email</b></label>
                <input type="text" placeholder="Age" />
            </form>

            <form action="/search" id="searchthis" method="post">
                <label for="sex"><b>Email</b></label>
                <input type="text" placeholder="Sexe" />
            </form>

            <button type="submit" class="registerbtn">S'inscrire</button>
        </div>
        </div>
    );
}

export default Register;