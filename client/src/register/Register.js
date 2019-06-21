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
        axios.post('http://localhost:5000/api/user/add', { email: event.target.children[0].value,
        first_name: event.target.children[1].value, last_name: event.target.children[2].value, age: event.target.children[3].value, gender: '' })
        .then(response => this.setState({message:"Votre compte a bien été créé."}))

        event.preventDefault();
    }


    render() {
        return (
        <div className="register">
            <h1>Inscription</h1>
            <form className="register-form" method="post" onSubmit={ this.register } >
                <input className="register-input email" type="email" placeholder="Adresse e-mail" required />
                <input className="register-input first-name" type="text" placeholder="Prénom" required />
                <input className="register-input last-name" type="text" placeholder="Nom" required />
                <input className="register-input age" type="number" placeholder="Age" required />

                <div className="gender-input">
                    <input id="male" type="radio" name="gender" value="male" />
                    <label htmlFor="male">Homme</label>
                </div>
                <div className="gender-input">
                    <input id="female" type="radio" name="gender" value="female" />
                    <label htmlFor="female">Femme</label>
                </div>
                <div className="gender-input">
                    <input id="unknown" type="radio" name="gender" value="unknown" />
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
