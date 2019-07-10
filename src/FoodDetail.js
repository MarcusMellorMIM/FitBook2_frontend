import React, { Component } from "react";

class FoodDetail extends Component {

    render() {
    
    const {serving_qty, serving_unit,food_name, unit_calories, photo_thumb, unit_grams } = this.props.food;
    const arrayIndex = this.props.arrayIndex;

      return (
          <tr>
            <td>
                <img src={photo_thumb} alt={food_name} name="photo_thumb"/>
            </td>
            <td>
              {food_name}
          </td>
          <td>
              <input type="number" className="smallNumber" id="serving_qty" name="serving_qty" value={serving_qty} onChange={ event => this.props.changeFoodDetail(event, arrayIndex) }/>
          </td>
          <td>
              {serving_unit}
          </td>
          <td>
            {Math.ceil(serving_qty * unit_grams)} grams
          </td>
          <td>
              {Math.ceil(serving_qty * unit_calories)} calories
          </td>
          </tr>
      );
    }
  }
  
  export default FoodDetail;
  