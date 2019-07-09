import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeries
} from "react-vis";

class Weight extends Component {

  genGraphData = () => {
    // Render the weight object into a form the graph object understands
    let data = this.props.weights.map(weight => {
      return { x: Date.parse(weight.weight_date), y: weight.weight_kg, id:weight.id };
    });

    return data;
  };

  render() {
    const { id, weight_kg, weight_date_d, weight_date_t } = this.props.weight;

    return (
      <div>
        <div>
    {!id ?  <h2>Record your weight here</h2> : <h2>Update the selected weight here</h2> }

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
            <label htmlFor="weight_date_d">Enter the date </label>
            <input
              type="date"
              id="weight_date_d"
              name="weight_date_d"
              value={weight_date_d}
              onChange={this.props.changeWeight}
            />
            <label name="weight_date"> or leave blank if recorded today.</label>
            <br />
            <label htmlFor="weight_t">Enter the time </label>
            <input
              type="time"
              id="weight_date_t"
              name="weight_date_t"
              value={weight_date_t}
              onChange={this.props.changeWeight}
            />
            <label name="weight_date"> or leave blank if taken now.</label>
            <br />
            <label htmlFor="submitBtn">Hit submit, to save this entry</label>
            <button type="submit" id="submitBtn" name="submitBtn">
              Submit
            </button>

          </form>

            {!!id ?
            <div>
            <label htmlFor="deleteBtn">Hit delete, to remove this entry, or undo</label>
            <button type="submit"id="deleteBtn" name="deleteBtn" onClick={this.props.deleteWeight}>
              Delete
            </button>
            <button type="submit"id="resetBtn" name="resetBtn" onClick={this.props.resetWeight}>
              Undo
            </button>
            </div>
            : null }

          <hr />
        </div>

        <div>
          <div>
            <h2>Click on the graph, to select a weight to update or delete</h2>
            <XYPlot
              xType="time"
              height={400}
              width={500}
              margin={{ left: 120, right: 20, top: 20, bottom: 120 }}
            >

          {/* <ChartLabel
          text="Date"
          className="alt-x-label"
          includeMargin={true}
          xPercent={0.9}
          yPercent={1.01}
          />
          <ChartLabel
          text="Weight (kgs)"
          className="alt-y-label"
          includeMargin={false}
          xPercent={-0.07}
          yPercent={0.06}
          /> */}
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis title="Time"/>
              <YAxis title="Weight (kg)" width={100} />
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
