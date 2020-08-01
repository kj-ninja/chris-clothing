import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Shop from "./containers/Shop/Shop";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
  );
}

export default App;