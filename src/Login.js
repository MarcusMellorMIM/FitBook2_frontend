import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Login!!!</h1>
        {this.props.isLoggedIn ? (
          <div>
            <p> {`you're logged in as ${this.props.username}`}</p>
          </div>
        ) : (
          <form>
            <label htmlFor="user_name">
              <b>Username: </b>
            </label>
            <input
              type="text"
              onChange={this.props.handleLoginChange}
              placeholder="Enter Username"
              name="user_name"
            />
            <br />
            <label htmlFor="password">
              <b>Password: </b>
            </label>
            <input
              type="password"
              onChange={this.props.handleLoginChange}
              placeholder="Enter Password"
              name="password"
            />
            <br />
            <button onClick={this.props.handleLogin} type="submit">
              {" "}
              Login{" "}
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
