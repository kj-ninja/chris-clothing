import React, {Component} from 'react';
import {auth, createUserProfileDocument} from "../../../firebase/firebase";
import './Register.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

class Register extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match!');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch(error) {
            console.log(error);
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <section className="register">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </section>
        );
    }
}

export default Register;