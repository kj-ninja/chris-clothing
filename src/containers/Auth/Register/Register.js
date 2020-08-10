import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signUpStart} from "../../../store/actions/user";
import './Register.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const Register = ({signUpStart}) => {
    const [user, setUser] = useState ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {displayName, email, password, confirmPassword} = user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords dont match!');
            return;
        }

        signUpStart({displayName, email, password});
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser({...user, [name]: value});
    };

    return (
        <section className="register">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </section>
    );
}

export default connect(null, {signUpStart})(Register);