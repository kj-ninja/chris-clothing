import React, {Component} from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./ErrorBoundary.styles";

class ErrorBoundary extends Component {
    state = {
        isError: false
    };

    static getDerivedStateFromError(error) {
        return {isError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.isError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png"/>
                    <ErrorImageText>Sorry This Page is Buried in the Sand</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;