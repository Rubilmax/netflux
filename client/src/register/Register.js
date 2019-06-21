import React from "react";
import axios from 'axios';


import './Register.css';


class Register extends React.Component {

    constructor() {
        super();
        this.state = { message: '' };

        this.register = this.register.bind(this);
    }

    register(event) {
        axios.post('http://localhost:5000/api/user/add', { email: event.target.email.value,
                                                        first_name: event.target.first_name.value,
                                                        last_name: event.target.last_name.value,
                                                        age: event.target.age.value,
                                                        gender: event.target.gender.value })
            .then(response => {
                this.setState({ message: "Votre compte a bien été créé." });
                setTimeout(function() {
                    window.location = "http://localhost:3000/account";
                }, 2000);
            });
        event.preventDefault();
    }


    render() {
        return (
        <div className="register">
            <h1>Inscription</h1>
            <form className="register-form" onSubmit={ this.register } >
                <input className="register-input email" name="email" type="email" placeholder="Adresse e-mail" required />
                <input className="register-input first-name" name="first_name" type="text" placeholder="Prénom" required />
                <input className="register-input last-name" name="last_name" type="text" placeholder="Nom" required />
                <input className="register-input age" name="age" type="number" placeholder="Age" required />

                <div className="gender-input">
                    <input id="male" type="radio" name="gender" value="male" />
                    <label htmlFor="male">Homme</label>
                </div>
                <div className="gender-input">
                    <input id="female" type="radio" name="gender" value="female" />
                    <label htmlFor="female">Femme</label>
                </div>
                <div className="gender-input">
                    <input id="unknown" type="radio" name="gender" value="unknown" defaultChecked />
                    <label htmlFor="unknown">Autre</label>
                </div>
                <input className="register-btn" type="submit" value="Inscription" />
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

export default Register;
