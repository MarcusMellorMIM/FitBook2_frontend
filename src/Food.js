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
          </form>
        </div>

        <div>
          <table>
            {this.props.food.details.map((fd, index) => (
              <FoodDetail
                key={index}
                food={fd}
                arrayIndex={index}
                changeFoodDetail={this.props.changeFoodDetail}
              />
            ))}
          </table>
        </div>

        {this.props.food.details.length > 0 ? (
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
              <label htmlFor="meal_type_id">
                How would you describe this ?{" "}
              </label>
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
              >
                Submit
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Food;
