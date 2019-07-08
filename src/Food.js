import React, { Component } from "react";

import FoodDetail from "./FoodDetail";

class Food extends Component {

  render() {
    return (
      <div>

      <div>
        <h1>Record your food, drinks and snacks here</h1>
        <form onSubmit={this.props.submitFood}>
          <label htmlFor="foodDetail">Natural language search here </label> 
          <input type="text" className="largetext" id="foodDetail" name="foodDetail" value={this.props.foodDetail} onChange={this.props.changeFood}/>
          <button type="submit" className="submitBtn" id="foodsubmitBtn" name="foodsubmitBtn" >Submit</button>
          </form>
      </div>

      <div>
        <table>
          {this.props.food.details.map( (fd, index) => (
            <FoodDetail key={index} food={fd} arrayIndex={index} changeFoodDetail={this.props.changeFoodDetail}/>
          ))} 
        </table>
      </div>

      {this.props.food.details.length>0 ?
        <div>
          <h2>Totalling { this.props.food.totalCalories } calories</h2>

            <form onSubmit={this.props.submitFoodDetail}>
            <label htmlFor="foodDate">Enter date/time or leave blank for now </label>
            <input type="date" id="foodDate" name="foodDate" onChange={this.props.changeFood} />
            <input type="time" id="foodTime" name="foodTime" onChange={this.props.changeFood} />
            <button type="submit" className="submitBtn" id="foodDetailSubmitBtn" name="foodDetailSubmitBtn" >Submit</button>
          </form>
      </div>
      : null}

      </div>
    );
  }
}

export default Food;
