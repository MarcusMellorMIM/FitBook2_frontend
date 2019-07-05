import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup </h1>
        <p>
          Fill in this lovely form to create your account and sell us your soul
        </p>
        <hr />
        <form>
          <label for="username">
            <b>Username: </b>
          </label>
          <input placeholder="Enter Username" name="username" />
          <br />
          <label for="firstname">
            <b>First Name: </b>
          </label>
          <input placeholder="Enter First Name" name="firstname" />
          <br />
          <label for="email">
            <b>Email Address: </b>
          </label>
          <input placeholder="Enter Email" name="email" />
          <br />
          <label for="dob">
            <b>Date of Birth: </b>
          </label>
          <input placeholder="DD/MM/YYYY" name="dob" />
          <br />
          <label for="height">
            <b>Height: </b>
          </label>
          <input placeholder="170 cm" name="height" />
          <br />
          <label for="weight">
            <b>Weight: </b>
          </label>
          <input placeholder="Enter your weight in kg" name="weight" />
          <br />
          <label for="gender">
            <b>Gender: </b>
          </label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>{" "}
          <b>Required to calculate your base metabolic rate</b>
        </form>
      </div>
    );
  }
}

export default Signup;
