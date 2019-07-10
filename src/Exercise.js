import React, { Component } from "react";
import ExerciseShowDetail from "./ExerciseShowDetail";
import ExerciseShowGraph from "./ExerciseShowGraph";

class Exercise extends Component {
  render() {
    return (
      <div>

        <div>
          <h2>Record your activity here</h2>
          <form onSubmit={this.props.submitExercise}>
            <label htmlFor="foodDetail">Natural language search here </label>
            <input
              type="text"
              className="largetext"
              id="exerciseDetail"
              name="detail"
              value={this.props.exercise.detail}
              onChange={this.props.changeExercise}
            />
            <button
              type="submit"
              className="submitBtn"
              id="exercisesubmitBtn"
              name="exercisesubmitBtn"
            >
              Submit
            </button>
            <hr />
          </form>
        </div>

        {this.props.exercise.exercise_details.length > 0 ? (

            <ExerciseShowDetail
              exercise={this.props.exercise}
              changeExerciseDetail={this.props.changeExerciseDetail}
              onSubmit={this.props.submitExerciseDetail}
              onChange={this.props.changeExercise}
              totalCalories={this.props.exercise.totalCalories}
              submitExerciseDetail={this.props.submitExerciseDetail}
            />
        )
        : 
        <ExerciseShowGraph
          exercises={this.props.exercises}
          selectExercise={this.props.selectExercise}
        />
      }
      </div>
    );
  }
}

export default Exercise;
