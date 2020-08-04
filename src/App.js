import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./store/selectors/user";
import {setCurrentUser} from "./store/actions/user";
import {auth, createUserProfileDocument} from './firebase/firebase';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                })
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" render={()=> this.props.currentUser ? <Redirect to="/"/> : <Login/>}/>
                    <Route exact path="/register" render={()=> this.props.currentUser ? <Redirect to="/"/> : <Register/>}/>
                    <Route path="/shop" component={Shop}/>
                    <Route exact path="/checkout" component={Checkout}/>
                </Switch>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, {setCurrentUser})(App);