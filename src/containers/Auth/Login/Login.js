import React, {Component} from 'react';
import './Login.scss';
import {auth, signInWithGoogle} from "../../../firebase/firebase";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../../UI/CustomButton/CustomButton";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
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
        return (
            <section className="login">
                <h2>I already have an account</h2>
                <span>Sign in with you email an password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label="Password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} type="button" google>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </section>
        );
    }
}

export default Login;