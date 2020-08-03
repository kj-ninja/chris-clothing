import React, {Component} from 'react';
import FormInput from "../FormInput/FormInput";
import './Login.scss';
import CustomButton from "../../../UI/CustomButton/CustomButton";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="login">
                <h1>I already have an account</h1>
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

                    <CustomButton type="submit">
                        Submit Form
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default Login;