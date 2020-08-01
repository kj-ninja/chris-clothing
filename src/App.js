import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
  );
}

export default App;