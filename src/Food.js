import React, { Component } from "react";

import FoodShowDetail from "./FoodShowDetail";
import FoodShowGraph from "./FoodShowGraph";

class Food extends Component {
  render() {
    return (
      <div>

        <div>
          <h2>Record your food, drinks and snacks here</h2>
          <form onSubmit={this.props.submitFood}>
            <label htmlFor="foodDetail">Natural language search here </label>
            <input
              type="text"
              className="largetext"
              id="foodDetail"
              name="detail"
              value={this.props.food.detail}
              onChange={this.props.changeFood}
            />
            <button
              type="submit"
              className="submitBtn"
              id="foodsubmitBtn"
              name="foodsubmitBtn"
            >
              Submit
            </button>
            <hr />
          </form>
        </div>

        {this.props.food.meal_details.length > 0 ? (

            <FoodShowDetail
              food={this.props.food}
              changeFoodDetail={this.props.changeFoodDetail}
              onSubmit={this.props.submitFoodDetail}
              onChange={this.props.changeFood}
              totalCalories={this.props.food.totalCalories}
              submitFoodDetail={this.props.submitFoodDetail}
            />
        )
        : 
        <FoodShowGraph
          foods={this.props.foods}
          selectFood={this.props.selectFood}
        />
      }
      </div>
    );
  }
}

export default Food;
