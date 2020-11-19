import React, { Component } from "react";
//import Counter from "../components/counter";
import "../css/second.css";

class Second extends Component {
  state = {
    name: "Yahya",
  };
  render() {
    //console.log(this.props);
    console.log("Second - Rendered");

    return (
      <div id="second">
        {this.props.children}
        <h1>My name is {this.state.name}</h1>
        {/* <p> <Counter count={Counter.state}/></p> */}
        <p>
          The sum of Counter is <span>{this.props.value}</span>
        </p>
      </div>
    );
  }
}

export default Second;
