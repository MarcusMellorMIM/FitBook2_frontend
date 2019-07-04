import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div class="usernav">
        <NavLink to="/Weight">Weight</NavLink>
        <NavLink to="/Food"> Food</NavLink>
        <NavLink to="/Exercise">Exercise</NavLink>
        <NavLink to="/Dashboard"> Dashboard</NavLink>
        <NavLink to="/Account"> Account</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Signup"> Signup</NavLink>
      </div>
    );
  }
}

export default NavBar;
