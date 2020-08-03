import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Auth/Login/Login";

class App extends Component {
    state = {
        currentUser: null
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
            this.setState({currentUser: user});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </>
        );
    }
}

export default App;