import React, { Component } from "react";
import Counter from "./counter";
import Second from "./second";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    // Object destructuring
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDeincrement,
      setSum,
    } = this.props;
    return (
      <div className="parent-counter">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="counters">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              //id={counter.id}
              //value={counter.value}
              //or
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDeincrement={onDeincrement}
              selected={true}
            >
              {/* Passing Children */}
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
          <Second value={setSum} />
        </div>
      </div>
    );
  }
}

export default Counters;
