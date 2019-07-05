import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      firstname: "",
      dob: null,
      height: null,
      weight: null,
      gender: "",
      registrationErrors: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Signup </h1>
        <p>
          Fill in this lovely form to create your account and sell us your soul
        </p>
        <hr />
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log("Form Submitted");
          }}
        >
          <label htmlFor="username">
            <b>Username: </b>
          </label>
          <input type="text" placeholder="Enter Username" name="username" />
          <br />
          <label htmlFor="email">
            <b>Email Address: </b>
          </label>
          <input type="email" placeholder="Enter Email" name="email" />
          <br />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input type="password" placeholder="Enter Password" name="password" />
          <br />
          <label htmlFor="firstname">
            <b>First Name: </b>
          </label>
          <input type="text" placeholder="Enter First Name" name="firstname" />
          <br />
          <label htmlFor="dob">
            <b>Date of Birth: </b>
          </label>
          <input type="date" placeholder="DD/MM/YYYY" name="dob" />
          <br />
          <label htmlFor="height">
            <b>Height: </b>
          </label>
          <input
            type="number"
            placeholder="Enter your height in cm"
            name="height"
          />
          <br />
          <label htmlFor="weight">
            <b>Weight: </b>
          </label>
          <input
            type="number"
            placeholder="Enter your weight in kg"
            name="weight"
          />
          <br />
          <label htmlFor="gender">
            <b>Gender: </b>
          </label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>{" "}
          <b>Required to calculate your base metabolic rate</b>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
