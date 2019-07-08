import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login!!!</h1>
        <form onSubmit={this.props.handleLogin}>
          <label htmlFor="user_name">
            <b>Username: </b>
          </label>
          <input type="text" placeholder="Enter Username" name="user_name" />
          <br />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input type="text" placeholder="Enter Password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
