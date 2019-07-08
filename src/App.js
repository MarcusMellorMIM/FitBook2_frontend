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
const WEIGHTS_URL = "http://localhost:3000/weights";
const USERS_URL = "http://localhost:3000/users";
const MEALS_URL = "http://localhost:3000/meals";
const APIFOOD_URL = "http://localhost:3000/api/food";
const APIEXERCISE_URL = "http://localhost:3000/api/exercise";

const EMPTYWEIGHT = {
  id: "",
  weight_kg: "",
  weight_date: null,
  weight_d: "",
  weight_t: ""
};

const EMPTYFOOD = {
  foodDetail: "",
  totalCalories:0,
  foodDate:"",
  foodTime:"",
  details: []
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      weight: EMPTYWEIGHT,
      food: EMPTYFOOD,
      foods:[],
      weights: [],
      meals: [],
      exercises: [],
      isLoggedIn: true
    };
  }

  componentDidMount() {
    // THIS SHOULD BE REPLACED BY THE FUNCTION THAT LOGS ON A USER
    fetch(`${USERS_URL}/marcus`)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });
      });

    // SHOULD WE FETCH ALL IN USERS ??? OR SEPERATE DATA ???
    fetch(`${WEIGHTS_URL}/user/marcus`)
      .then(response => response.json())
      .then(data => {
        this.setState({ weights: data });
      });
  }

  // FOOD HANDLERS START
  changeFood = event => {
    // The handler that changes the food state, for either new or updates of a food entry
    // As this works off a single detail .... we can reset the entire state if this changes
    // no need to keep the details in the hash
    let food = {}
    Object.assign(food,this.state.food)
    food[event.target.name] = event.target.value;
    this.setState({ food: food });
  };

  changeFoodDetail = (event, index) => {
// Change an individual food line item
    let food = {}
    Object.assign(food,this.state.food)
    food.details[index][event.target.name] = event.target.value
    food.totalCalories = this.totalCalories(food.details)
    this.setState({ food: food });
  }

  totalCalories = (data) => {
     return data.map( fd=> 
             (Math.ceil(fd.serving_qty * fd.nf_calories))).reduce( (total,element) => { return total + element  } )
  }

  submitFood = event => {
    // Used to create a new weight, or update an existing one
    event.preventDefault();
    let foodDetail = this.state.food.foodDetail;

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({detail:foodDetail})
    };

    fetch(APIFOOD_URL, configObj)
    .then( data => data.json())
    .then( data => {
      this.setState( {food:{
              details:data,
              foodDetail:foodDetail,
              totalCalories : this.totalCalories(data)
            }
            } )
    })
  }

  submitFoodDetail = event => {
    // Store the food and food details records into the database
    event.preventDefault();
    let food = this.state.food;
    
    Object.assign(food, {user_id:this.state.user.id})

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
            user_id:this.state.user_id, // NEED TO CHANGE WITH AUTH
            food:food
          })
    };

    console.log(configObj )
    console.log(food)
    fetch(MEALS_URL, configObj)
    .then( data => data.json());

  }

  // WEIGHT HANDLERS START
  // All of the weight handlers ... should these be in a seperate file etc ?? whats best practice ?
  changeWeight = event => {
    // The handler that changes the weight state, for either new or updates of a weight
    let weight = {};
    Object.assign(weight, this.state.weight);
    weight[event.target.name] = event.target.value;
    this.setState({ weight: weight });
  };

  deleteWeight = () => {
    // The handler that changes the weight state, for either new or updates of a weight
    console.log("Deleting weight");
    let weights = [];

    fetch(`${WEIGHTS_URL}/${this.state.weight.id}`, { method: "DELETE" }).then(
      () => {
        console.log(`delete ${this.state.weight.id}`);
        weights = this.state.weights.filter(w => w.id !== this.state.weight.id);
        this.setState({ weights: weights });
        this.setState({ weight: EMPTYWEIGHT });
      }
    );
  };

  submitWeight = event => {
    // Used to create a new weight, or update an existing one
    event.preventDefault();
    // Should sort out the date stuff in the onChange hanlder .....
    //    let date = new Date();
    // date.setDate(07); AAAARRRRGGGHHHHH
    //date.setMonth(07);
    //date.setFullYear(2019);
    // date.setHours(09);
    // date.setMinutes(30);

    let weights = [...this.state.weights];

    // 1st sort out the date, will work on including time later
    // this.state.weight_d ? date = Date.now() : date = Date.parse(this.state.weight_d)
    // this.state.weight_t==="" ? :
    let weight = {
      id: this.state.weight.id,
      user_id: this.state.user.id,
      weight_kg: this.state.weight.weight_kg,
      weight_date: this.state.weight_date
    };

    if (this.state.weight.id === "") {
      // Inserting a weight
      console.log("New weight");

      if (!weight.weight_date) {
        weight.weight_date = new Date();
      }

      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(weight)
      };

      fetch(WEIGHTS_URL, configObj)
        .then(data => data.json())
        .then(data => {
          weights.push(data);
          console.log(weights);
          return weights;
        })
        .then(weights => {
          this.setState({ weights: weights });
        });
    } else {
      //Updating a weight in the database TO BE TESTED
      console.log("Update weight");
      let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(weight)
      };

      fetch(`${WEIGHTS_URL}/${weight.id}`, configObj)
        .then(data => data.json())
        .then(weight => {
          let weightIndex = weights.findIndex(w => w.id === weight.id);
          Object.assign(weights[weightIndex], weight);
          this.setState({ weights: weights });
        });
    }
    // Whether inserting or updating, we need to reset the weight state to
    // get the weight entry/udpate/delete form into initial state
    this.setState({ weight: EMPTYWEIGHT });
  };

  selectWeight = (datapoint, event) => {
    let weight = this.state.weights.find(w => w.id === datapoint.id);
    this.setState({ weight: weight });
  };

  // END OF WEIGHT STATE HANDLERS ETC

  // START OF USER STATE HANDLERS

  changeUser = event => {
    // The handler that changes the user state, for either new or updates of a user
    let user = {};
    Object.assign(user, this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  };

  createUser = event => {
    event.preventDefault();
    console.log(this.state.user);

    debugger;

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: this.state.user })
    };

    fetch(USERS_URL, configObj).then(data => data.json());
  };

  // END OF USER STATE HANDLERS

  // Render the pages, with routes called from the selection from Navbar
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/Login" component={Login} />
        <Route
          path="/Signup"
          render={() => (
            <Signup
              user={this.state.user}
              isLoggedIn={this.state.isLoggedIn}
              createUser={this.createUser}
              changeUser={this.changeUser}
            />
          )}
        />
        <Route
          path="/Weight"
          render={() => (
            <Weights
              user={this.state.user}
              weights={this.state.weights}
              weight={this.state.weight}
              submitWeight={this.submitWeight}
              changeWeight={this.changeWeight}
              deleteWeight={this.deleteWeight}
              selectWeight={this.selectWeight}
            />
          )}
        />
        <Route 
        path="/Food" 
        render={() => (
          <Food 
            component={Food} 
            user={this.state.user} 
            foods={this.state.foods} 
            food={this.state.food} 
            submitFood={this.submitFood}
            submitFoodDetail={this.submitFoodDetail} 
            changeFood={this.changeFood}
            changeFoodDetail={this.changeFoodDetail}
          />
          )}
        />

        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Account" component={Account} />
        <Route path="/Exercise" component={Exercise} />
      </Router>
    );
  }
}

export default App;
