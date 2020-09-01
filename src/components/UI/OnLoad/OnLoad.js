import React from 'react';
import Fade from "react-reveal/Fade";
import './OnLoad.scss';
import {ReactComponent as Logo} from '../../../assets/logo.svg';

const OnLoad = () => {
    return (
        <div className="on-load">
            <Fade top>
                <div className="container">
                    <Logo/>
                    <h1>Chris Clothing</h1>
                </div>
            </Fade>
        </div>
    );
};

export default OnLoad;