import React, { Component } from "react";

class Account extends Component {
  render() {
    return (
      <div>
        <h1>Your account details</h1>
        <p>Hello {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
        <p>Height: {this.props.user.height_cm}cm</p>
        <p>Date of Birth: {this.props.user.dob}</p>
      </div>
    );
  }
}

export default Account;
