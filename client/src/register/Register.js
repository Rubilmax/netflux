import React from "react";

import './Register.css';

function Register() {
    return (
        <div className="register">
            <h1>Inscription</h1>
            <form action="" className="register-form" method="post">
                <input className="register-input email" type="email" placeholder="Adresse e-mail" required />
                <input className="register-input first-name" type="text" placeholder="Prénom" required />
                <input className="register-input last-name" type="text" placeholder="Nom" required />
                <input className="register-input age" type="number" placeholder="Age" required />

                <div className="gender-input">
                    <input id="male" type="radio" name="gender" value="male" />
                    <label for="male">Homme</label>
                </div>
                <div className="gender-input">
                    <input id="female" type="radio" name="gender" value="female" />
                    <label for="female">Femme</label>
                </div>
                <div className="gender-input">
                    <input id="unknown" type="radio" name="gender" value="unknown" />
                    <label for="unknown">Autre</label>
                </div>
                <input className="register-btn" type="submit" value="Inscription" />
            </form>
        </div>
    );
}

export default Register;