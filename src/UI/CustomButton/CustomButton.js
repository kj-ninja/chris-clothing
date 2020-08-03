import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children, google, ...otherProps}) => {
    return (
        <button className={`${google ? "google" : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;