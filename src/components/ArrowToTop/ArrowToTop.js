import React from 'react';
import './ArrowToTop.scss';
import {animateScroll as scroll} from "react-scroll";

const ArrowToTop = ({show}) => {
    return (
        <div className={`to-top ${show ? 'visible' : ''}`} onClick={()=>scroll.scrollToTop()}>
            <img src={require('../../assets/to-top.svg')} alt="scroll-to-top-icon"/>
        </div>
    );
};

export default ArrowToTop;