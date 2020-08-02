import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";

function App() {
  return (
      <>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
      </>
  );
}

export default App;