import React from "react";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Weight from "./Weight";
import Food from "./Food";
import Account from "./Account";
import Exercise from "./Exercise";
import Dashboard from "./Dashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      weights: [],
      meals: [],
      exercises: [],
      isLoggedIn: false
    };
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Weight" component={Weight} />
        <Route path="/Food" component={Food} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Account" component={Account} />
        <Route path="/Exercise" component={Exercise} />
      </Router>
    );
  }
}

export default App;
