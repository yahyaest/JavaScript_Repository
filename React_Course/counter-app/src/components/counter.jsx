import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server

      console.log(this.props.counter.value);
      let buttonClass = document.querySelector(
        `#subs-${this.props.counter.id}`
      );
      if (this.props.counter.value < 1) {
        console.log(buttonClass);
        buttonClass.setAttribute("disabled", true);
      } else {
        buttonClass.removeAttribute("disabled", true);
      }

      console.log("Update - Counter");
    }
  }

  componentWillUnmount() {
    // Used to clean (timers/listeners..) to free memory before component is removed from the DOM to avoid memory leaks
    console.log("Counter - Unmount");
  }

  state = {
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  //Rendering styles dynamically
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //Bind  Event Handlers Method
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //  console.log("Increment Clicked ");
  //  this.state.value++;
  //  console.log(this.state.value);
  // }

  //Or better syntax + args

  render() {
    //console.log("props", this.props);
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        <div id={`counter-${this.props.counter.id}`}>
          {/* Passing Children */}
          {this.props.children}

          <h1 style={{ color: "red", textAlign: "center" }}>Hello React</h1>
          <br></br>
          <img src={this.state.imageUrl} alt=""></img>
          <br></br>
          <br></br>

          {/* <span> {this.state.value}</span> */}
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            // onClick={this.handleIncrement}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-dark btn-sm m-2"
            disabled={this.props.counter.value === 30 ? 'disabled' : ''}
          >
            +
          </button>
          <button
            id={`subs-${this.props.counter.id}`}
            onClick={() => this.props.onDeincrement(this.props.counter)}
            className="btn btn-dark btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
          {/* Condition Rendering */}
          {this.renderTags()}
          {this.state.tags.length === 0 && "Please create a new tag!"}
        </div>
      </React.Fragment>
    );
  }

  // Rendering classes dynamically
  getBadgeClasses() {
    let classChoice = "badge  m-2 badge-";
    classChoice += this.props.counter.value === 0 ? "warning m" : "primary";
    return classChoice;
  }

  formatCount() {
    // object destructuring (instead of repeating this.state.value)
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    //return value === 0 ? <h1>Zero</h1> : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
