import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from "./store/actions/user";
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";

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
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </>
        );
    }
}

export default connect(null, {setCurrentUser})(App);