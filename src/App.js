import React, {useEffect, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./store/selectors/user";
import {checkUserSession} from "./store/actions/user";
import Header from "./components/Header/Header";
import Spinner from "./components/UI/Spinner/Spinner";
import ErrorBoundary from "./components/UI/ErrorBoundary/ErrorBoundary";
import OnLoad from "./components/UI/OnLoad/OnLoad";

const Home = lazy(() => import('./components/Home/Home'));
const Shop = lazy(() => import('./containers/Shop/Shop'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const Login = lazy(() => import('./containers/Auth/Login/Login'));
const Register = lazy(() => import('./containers/Auth/Register/Register'))

const App = ({checkUserSession, currentUser}) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <>
            <OnLoad/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" render={() => currentUser ? <Redirect to="/"/> : <Login/>}/>
                        <Route exact path="/register" render={() => currentUser ? <Redirect to="/"/> : <Register/>}/>
                        <Route path="/shop" component={Shop}/>
                        <Route exact path="/checkout" component={Checkout}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, {checkUserSession})(App);