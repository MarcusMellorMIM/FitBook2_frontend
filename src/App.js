import React from "react";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Weights from "./Weights";
import Food from "./Food";
import Account from "./Account";
import Exercise from "./Exercise";
import Dashboard from "./Dashboard";


import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {"id": 1,
      "user_name": "marcus",
      "password_digest": null,
      "email": null,
      "name": "Marcus",
      "dob": "1967-06-13T00:00:00.000Z",
      "height_cm": 176,
      "gender": "M",
      "created_at": "2019-07-04T14:39:30.820Z",
      "updated_at": "2019-07-04T14:39:30.820Z"},
      weights: [{
        "id": 1,
        "user_id": 1,
        "weight_kg": 103.0,
        "weight_date": "2019-07-01T00:00:00.000Z",
        "created_at": "2019-07-05T10:25:44.047Z",
        "updated_at": "2019-07-05T10:25:44.047Z"
      },
              {"id": 2,
              "user_id": 1,
              "weight_kg": 102.0,
              "weight_date": "2019-07-02T00:00:00.000Z",
              "created_at": "2019-07-05T10:26:26.026Z",
              "updated_at": "2019-07-05T10:26:26.026Z"},
              {"id": 3,
              "user_id": 1,
              "weight_kg": 101.5,
              "weight_date": "2019-07-03T00:00:00.000Z",
              "created_at": "2019-07-05T10:27:50.736Z",
              "updated_at": "2019-07-05T10:27:50.736Z"},
            {"id": 4,
            "user_id": 1,
            "weight_kg": 102.5,
            "weight_date": "2019-07-04T00:00:00.000Z",
            "created_at": "2019-07-05T10:27:59.842Z",
            "updated_at": "2019-07-05T10:27:59.842Z"},
          {"id": 5,
          "user_id": 1,
          "weight_kg": 103.25,
          "weight_date": "2019-07-05T00:00:00.000Z",
          "created_at": "2019-07-05T10:28:21.051Z",
          "updated_at": "2019-07-05T10:28:21.051Z"}],
      meals: [],
      exercises: [],
      isLoggedIn: true
    };
  }

 createWeight = event => {
    event.preventDefault();
    console.log(event)
  }
  
  createUser = event => {
    event.preventDefault();
    console.log(event)
  }
  
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" render={() => <Signup user={this.state.user} isLoggedIn={this.state.isLoggedIn} createUser={this.createUser}/>} />
        <Route path="/Weight" render={() => <Weights user={this.state.user} weights={this.state.weights} createWeight={this.createWeight}/>} />
        <Route path="/Food" component={Food} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Account" component={Account} />
        <Route path="/Exercise" component={Exercise} />
      </Router>
    );
  }
}

export default App;
