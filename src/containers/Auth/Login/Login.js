import React, {Component} from 'react';
import {connect} from 'react-redux'
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import {LoginContainer, LoginTitle, ButtonsContainer, SignUpLink} from "./Login.styles";
import {googleSignInStart, emailSignInStart} from "../../../store/actions/user";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart(email ,password);
    };

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    };

    render() {
        const {googleSignInStart} = this.props;
        return (
            <LoginContainer>
                <LoginTitle>I already have an account</LoginTitle>
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

                    <ButtonsContainer>
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} google>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
                <SignUpLink to="/register">New user? <span>Click here</span></SignUpLink>
            </LoginContainer>
        );
    }
}

export default connect(null, {googleSignInStart, emailSignInStart})(Login);