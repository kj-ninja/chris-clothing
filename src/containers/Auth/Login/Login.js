import React, {useState} from 'react';
import {connect} from 'react-redux'
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import {LoginContainer, LoginTitle, ButtonsContainer, SignUpLink} from "./Login.styles";
import {googleSignInStart, emailSignInStart} from "../../../store/actions/user";

const Login = ({emailSignInStart, googleSignInStart}) => {
    const [user, setUser] = useState({email: '', password: ''});
    const {email, password} = user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    return (
        <LoginContainer>
            <LoginTitle>I already have an account</LoginTitle>
            <span>Sign in with you email an password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    required
                    label="Email"
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
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

export default connect(null, {googleSignInStart, emailSignInStart})(Login);