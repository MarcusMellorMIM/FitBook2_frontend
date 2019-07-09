import React from "react";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Weights from "./Weights";
import Food from "./Food";
import Account from "./Account";
import Exercise from "./Exercise";
import Dashboard from "./Dashboard";
import { login, getCurrentUser } from "./api";

import { BrowserRouter as Router, Route } from "react-router-dom";
const WEIGHTS_URL = "http://localhost:3000/weights";
const USERS_URL = "http://localhost:3000/users";
const MEALS_URL = "http://localhost:3000/meals";
const APIFOOD_URL = "http://localhost:3000/api/food";
const APIEXERCISE_URL = "http://localhost:3000/api/exercise";

const EMPTYWEIGHT = {
  id: "",
  weight_kg: "",
  weight_date: "",
  weight_date_d: "",
  weight_date_t: ""
};

const EMPTYFOOD = {
  detail: "",
  totalCalories:0,
  meal_date:"",
  meal_date_d:"",
  meal_date_t:"",
<<<<<<< HEAD
  meal_details: []
}
=======
  details: []
};
>>>>>>> 526eded20fb09324f0e821f7ab7dbc9e5707c181

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      weight: EMPTYWEIGHT,
      food: EMPTYFOOD,
      foods: [],
      weights: [],
      exercises: [],
      isLoggedIn: false
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

      // GET THE FOOD RECORDED AFTER A PERSON HAS BEEN SELECTED
      fetch(`${MEALS_URL}/user/marcus`)
      .then(response => response.json())
      .then (data => {
        return data.map(food=>{
          return Object.assign(food, { totalCalories:this.totalCalories(food.meal_details)})
        })
      })
      .then(data => {
        this.setState({ foods: data });
      });
     
  }

  // FOOD HANDLERS START
  changeFood = event => {
    // The handler that changes the food state, for either new or updates of a food entry
    // As this works off a single detail .... we can reset the entire state if this changes
    // no need to keep the details in the hash
    let food = {};
    Object.assign(food, this.state.food);
    food[event.target.name] = event.target.value;
    this.setState({ food: food });
  };

  changeFoodDetail = (event, index) => {
<<<<<<< HEAD
// Change an individual food line item
    let food = {}
    Object.assign(food,this.state.food)
    food.meal_details[index][event.target.name] = event.target.value
    food.totalCalories = this.totalCalories(food.meal_details)
=======
    // Change an individual food line item
    let food = {};
    Object.assign(food, this.state.food);
    food.details[index][event.target.name] = event.target.value;
    food.totalCalories = this.totalCalories(food.details);
>>>>>>> 526eded20fb09324f0e821f7ab7dbc9e5707c181
    this.setState({ food: food });
  };

<<<<<<< HEAD
  totalCalories = data => {
    return data
      .map(fd => Math.ceil(fd.serving_qty * fd.nf_calories))
      .reduce((total, element) => {
        return total + element;
      });
  };
=======
  totalCalories = (data) => {
     return data.length>0 ?
       data.map( fd=> 
             (Math.ceil(fd.serving_qty * fd.nf_calories))).reduce( (total,element) => { return total + element  } )
             : 0
  }
>>>>>>> 73c9ed9c86cc656c9a3d2d15585baab518f85102

  submitFood = event => {
    // Used to create a new weight, or update an existing one
    event.preventDefault();

    // Should save the Object, and then assign details from the array rather than this clumsy manner
    let detail = this.state.food.detail;
    let meal_date = this.state.meal_date;
    let meal_date_d = this.state.meal_date_d;
    let meal_date_t = this.meal_date_t;

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
<<<<<<< HEAD
      body: JSON.stringify({ detail: foodDetail })
    };

    fetch(APIFOOD_URL, configObj)
      .then(data => data.json())
      .then(data => {
        this.setState({
          food: {
            details: data,
            foodDetail: foodDetail,
            totalCalories: this.totalCalories(data)
          }
        });
      });
  };
=======
      body: JSON.stringify({detail:detail})
    };

    fetch(APIFOOD_URL, configObj)
    .then( data => data.json())
    .then( data => data.map(fd => {
      return Object.assign(fd, {photo_thumb:fd.photo.thumb } )
    }))
    .then( data => {
      this.setState( {food: {
              meal_details:data,
              detail:detail,
              totalCalories : this.totalCalories(data),
              meal_date:meal_date,
              meal_date_d:meal_date_d,
              meal_date_t:meal_date_t
             }
            } )
    })
  }
>>>>>>> 73c9ed9c86cc656c9a3d2d15585baab518f85102

  submitFoodDetail = event => {
    // Store the food and food details records into the database
    event.preventDefault();
<<<<<<< HEAD
    let food = this.state.food;

    Object.assign(food, { user_id: this.state.user.id });
=======
    let food = {}
    let foods = [...this.state.foods];
    foods.push(food);

    Object.assign(food, this.state.food, {user_id:this.state.user.id})
>>>>>>> 73c9ed9c86cc656c9a3d2d15585baab518f85102

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user_id, // NEED TO CHANGE WITH AUTH
        food: food
      })
    };

<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log(configObj);
    console.log(food);
    fetch(MEALS_URL, configObj).then(data => data.json());
  };
=======
    console.log(configObj )
    console.log(food)
>>>>>>> 526eded20fb09324f0e821f7ab7dbc9e5707c181
    fetch(MEALS_URL, configObj)
    .then( data => data.json())
    .then( () => this.setState( {foods:foods} ))
    .then( () => this.resetFood() );

  }

  resetFood = () => {
    // Resets the food entry form
    this.setState({food:EMPTYFOOD})
  }
>>>>>>> 73c9ed9c86cc656c9a3d2d15585baab518f85102

  selectFood = (datapoint, event) => {
    console.log('Select a graph point')
    let food={}
    Object.assign(food, this.state.foods.find(f => f.id === datapoint.id));
    // Add the split date items to allow the date and time input fields to work
    Object.assign(food,
          {meal_date_d:this.dateString(food.meal_date) }, 
          {meal_date_t:this.timeString(food.meal_date) }
        )
    console.log(food)
    this.setState({ food: food });
  };

  // END OF FOOD HANDLERS
//////////////////////////////////////////////////////////////////////////////
  // WEIGHT HANDLERS START

  // All of the weight handlers ... should these be in a seperate file etc ?? whats best practice ?
  changeWeight = event => {
    // The handler that changes the weight state, for either new or updates of a weight
    let weight = {};
    Object.assign(weight, this.state.weight);
    weight[event.target.name] = event.target.value;
    this.setState({ weight: weight });
  };

  resetWeight = () => {
    // Resets the weight entry form
    this.setState({weight:EMPTYWEIGHT})
  }

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
    let weights = [...this.state.weights];

// The date handling is now done on the backend
    let weight = {}
    Object.assign(weight, this.state.weight, {user_id:this.state.user.id} )

    if (this.state.weight.id === "") {
      // Inserting a weight
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
    // Add the split date items to allow the date and time input fields to work
    Object.assign(weight,
          {weight_date_d:this.dateString(weight.weight_date) }, 
          {weight_date_t:this.timeString(weight.weight_date) }
        )
    this.setState({ weight: weight });
  };

  dateString = (date) => {
  // Used by the date part of a date item ... will return the YYYY-MM-YY bit of a date
      return !!date ? date.toString().slice(0,10) : null
  }

  timeString = (date) => {
  // Used by the time part of a date item .. will return the HH:MI bit of a date
    return !!date ? date.toString().slice(11,16) : null 
  }
  // END OF WEIGHT STATE HANDLERS ETC
//////////////////////////////////////////////////////////////////////////////
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

  handleLoginChange = event => {
    let user = {};
    Object.assign(user, this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log("Hello Programmer");
    debugger;
    login(this.state.user.user_name, this.state.user.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ user_name: "", password: "" });
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ isLoggedIn: true, user_name: data.user_name });
      }
    });
  };
  // END OF USER STATE HANDLERS

  // Render the pages, with routes called from the selection from Navbar
  render() {
    return (
      <Router>
        <NavBar />
        <Route
          path="/Login"
          render={() => (
            <Login
              handleLoginChange={this.handleLoginChange}
              user={this.state.user}
              isLoggedIn={this.state.isLoggedIn}
              handleLogin={this.handleLogin}
            />
          )}
        />
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
              resetWeight={this.resetWeight}
            />
          )}
        />
<<<<<<< HEAD
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
            selectFood={this.selectFood}
          />
=======
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
>>>>>>> 526eded20fb09324f0e821f7ab7dbc9e5707c181
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
