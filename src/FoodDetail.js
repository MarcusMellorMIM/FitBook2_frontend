import React, { Component } from "react";

class FoodDetail extends Component {

    render() {
    
    const {serving_qty, serving_unit,food_name, nf_calories, photo, serving_weight_grams } = this.props.food;
    const arrayIndex = this.props.arrayIndex;

      return (
          <tr>
            <td>
                <img src={photo.thumb} alt={food_name}/>
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
            {Math.ceil(serving_qty * serving_weight_grams)} grams
          </td>
          <td>
              {Math.ceil(serving_qty * nf_calories)} calories
          </td>
          </tr>
      );
    }
  }
  
  export default FoodDetail;
  