import React, { Component } from "react";

class ExerciseDetail extends Component {

    render() {
    
    const {name, duration_min, unit_calories, photo_thumb } = this.props.exercise;
    const arrayIndex = this.props.arrayIndex;

      return (
          <tr>
            <td>
                <img src={photo_thumb} alt={name} name="photo_thumb"/>
            </td>
            <td>
              {name}
          </td>
          <td>
              <input type="number" className="smallNumber" id="duration_min" name="duration_min" value={duration_min} onChange={ event => this.props.changeExerciseDetail(event, arrayIndex) }/>
          </td>
          <td>
              minutes
          </td>
          <td>
              {Math.ceil(duration_min * unit_calories)} calories
          </td>
          </tr>
      );
    }
  }
  
  export default ExerciseDetail;
  