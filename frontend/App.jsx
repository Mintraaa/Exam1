import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
