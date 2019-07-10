import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log in</h1>
        {this.props.isLoggedIn ? (
          <div>
            <p> {`Hi ${this.props.user.name}, you're now logged in`}</p>
            <button onClick={this.props.handleLogOut}>Log Out</button>
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
