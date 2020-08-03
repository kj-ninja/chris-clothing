import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";
import Login from "./containers/Auth/Login/Login";

function App() {
  return (
      <>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/login" component={Login}/>
          </Switch>
      </>
  );
}

export default App;