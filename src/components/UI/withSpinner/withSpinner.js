import React from 'react';
import Spinner from "../Spinner/Spinner";

const withSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? <Spinner/> : <WrappedComponent {...otherProps} />
};

export default withSpinner;