import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeries
} from "react-vis";

class Weight extends Component {
  constructor() {
    super();
  }

  genGraphData = () => {
    // Render the weight object into a form the graph object understands
    let data = this.props.weights.map(weight => {
      return { x: Date.parse(weight.weight_date), y: weight.weight_kg, id:weight.id };
    });

    return data;
  };

  render() {
    const { id, weight_kg, weight_d, weight_t } = this.props.weight;

    return (
      <div>
        <div>
          <form onSubmit={this.props.submitWeight}>
            <input type="hidden" id="weight_id" name="weight_id" value={id} />
            <label htmlFor="weight_kg">Please enter your latest weight </label>
            <input
              type="number"
              id="weight_kg"
              name="weight_kg"
              value={weight_kg}
              onChange={this.props.changeWeight}
            />
            <label name="weight_kg"> in kilograms.</label>
            <br />
            <label htmlFor="weight_d">Enter the date </label>
            <input
              type="date"
              id="weight_d"
              name="weight_d"
              value={weight_d}
              onChange={this.props.changeWeight}
            />
            <label name="weight_date"> or leave blank if recorded today.</label>
            <br />
            <label htmlFor="weight_t">Enter the time </label>
            <input
              type="time"
              id="weight_t"
              name="weight_t"
              value={weight_t}
              onChange={this.props.changeWeight}
            />
            <label name="weight_date"> or leave blank if taken now.</label>
            <br />
            <label htmlFor="submitBtn">Hit submit, to save this entry</label>
            <button type="submit" id="submitBtn" name="submitBtn">
              Submit
            </button>

          </form>

            <label htmlFor="deleteBtn">Hit delete, to remove this entry</label>
            <button type="submit"id="deleteBtn" name="deleteBtn" onClick={this.props.deleteWeight}>
              Delete
            </button>

          <hr />
        </div>

        <div>
          <div>
            <XYPlot
              xType="time"
              height={400}
              width={500}
              margin={{ left: 120, right: 20, top: 20, bottom: 40 }}
            >
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis title="Time" />
              <YAxis title="Weight (kg)" width={70} />
              <MarkSeries
                color="red"
                data={this.genGraphData()}
                onValueClick= {(datapoint,event) => this.props.selectWeight(datapoint,event)}
              />
            </XYPlot>
          </div>
        </div>
      </div>
    );
  }
}

export default Weight;
