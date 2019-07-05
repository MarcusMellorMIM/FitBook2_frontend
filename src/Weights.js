import React, { Component } from "react";

class Weight extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <div>
      <div>
        <form onSubmit={this.props.onSubmitForm}>
          <label name="weight_kg" >Please enter your latest weight  </label>
          <input type="number" name="weight_kg" />
          <label name="weight_kg" > in kilograms.</label>
          <br/>
          <label name="weight_date">Enter the date  </label>
          <input type="date" name="weight_date"/>
          <label name="weight_date"> or leave blank if recorded today.</label>
          <br/>
          <label name="weight_time">Enter the time  </label>
          <input type="time" name="weight_time"/>
          <label name="weight_date"> or leave blank if taken now.</label>
          <br/>
          <label name="submitBtn">Hit submit, to save this entry</label>
          <button type="submit" name="submitBtn">Submit</button>
        </form>
        <hr/>
      </div>

      <div>
        {this.props.weights.map(weight=>(<p>{weight.weight_kg}</p>))}
      </div>
</div>
    );
  }
}

export default Weight;
