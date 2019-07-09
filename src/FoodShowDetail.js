import React, { Component } from "react";
import FoodDetail from "./FoodDetail";

// Renders the meal items from the api, plus additional form buttons to 
// allow the user to save the meal
class FoodShowDetail extends Component {
  render() {
    return (
      <div>
        <div>
{/* Display the API rendered food details */}
          <tbody>
            {this.props.food.meal_details.map((fd, index) => (
              <FoodDetail
                key={index}
                food={fd}
                arrayIndex={index}
                changeFoodDetail={this.props.changeFoodDetail}
              />
            ))}
          </tbody>
        </div>

{/* Now display the rest of the form items to allow a user to 
save the meal into the database */}
        <div>
          <h2>Totalling {this.props.food.totalCalories} calories</h2>
          <form onSubmit={this.props.submitFoodDetail}>
            <label htmlFor="foodDate">
              Enter date/time or leave blank for now{" "}
            </label>
            <input
              type="date"
              id="foodDate"
              name="meal_date_d"
              onChange={this.props.changeFood}
            />
            <input
              type="time"
              id="foodTime"
              name="meal_date_t"
              onChange={this.props.changeFood}
            />
            <label htmlFor="meal_type_id">How would you describe this ? </label>
            <select
              defaultValue="1"
              name="meal_type_id"
              onChange={this.props.changeFood}
            >
              <option value="1">Angelic</option>
              <option value="2">Meh</option>
              <option value="3">Guilty</option>
            </select>
            <button
              type="submit"
              className="submitBtn"
              id="foodDetailSubmitBtn"
              name="foodDetailSubmitBtn"
              onChange={this.submitFoodDetail}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FoodShowDetail;
