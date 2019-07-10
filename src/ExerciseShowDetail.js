import React, { Component } from "react";
import ExerciseDetail from "./ExerciseDetail";

// Renders the exercise items from the api, plus additional form buttons to 
// allow the user to save the meal
class ExerciseShowDetail extends Component {
  render() {
    return (
      <div>
        <div>
{/* Display the API rendered food details */}
          <tbody>
            {this.props.exercise.exercise_details.map((ed, index) => (
              <ExerciseDetail
                key={index}
                exercise={ed}
                arrayIndex={index}
                changeExerciseDetail={this.props.changeExerciseDetail}
              />
            ))}
          </tbody>
        </div>

{/* Now display the rest of the form items to allow a user to 
save the exercise into the database */}
        <div>
          <h2>Totalling {this.props.exercise.totalCalories} calories</h2>
          <form onSubmit={this.props.submitExerciseDetail}>
            <label htmlFor="exerciseDate">
              Enter date/time or leave blank for now{" "}
            </label>
            <input
              type="date"
              id="exerciseDate"
              name="exercise_date_d"
              onChange={this.props.changeExercise}
            />
            <input
              type="time"
              id="exerciseTime"
              name="exercise_date_t"
              onChange={this.props.changeExercise}
            />
            <label htmlFor="exercise_type_id">How would you describe this ? </label>
            <select
              defaultValue="1"
              name="exercise_type_id"
              onChange={this.props.changeExercise}
            >
              <option value="1">Light</option>
              <option value="2">Moderate</option>
              <option value="3">Intense</option>
            </select>
            <button
              type="submit"
              className="submitBtn"
              id="exerciseDetailSubmitBtn"
              name="exerciseDetailSubmitBtn"
              onChange={this.submitExerciseDetail}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ExerciseShowDetail;
