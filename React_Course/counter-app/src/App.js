import React from "react";
import "./App.css";
import "./components/counters";
import "./components/navbar";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 10 },
      { id: 4, value: 20 },
    ],
  };

  constructor(props) {
    super(props);
    // Set the state based on the props received from parent
    // this.state = this.props;
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Get data from server
    // Ajax Call
    console.log("subs");
    this.state.counters.map((counter) => {
      console.log(counter.value);
      if (counter.value < 1) {
        document
          .querySelector(`#subs-${counter.id}`)
          .setAttribute("disabled", true);
      }
    });

    //this.setState({movies})
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    console.log("Increment Clicked ", counter);
    //Updatin the state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters[index], this.state.counters[index].value);
    this.setState({ counters });
  };

  handleDeincrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value >= 1) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleSum() {
    let sum = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      sum += this.state.counters[i].value;
    }
    //console.log(sum);
    return sum;
  }

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDeincrement={this.handleDeincrement}
            onDelete={this.handleDelete}
            setSum={this.handleSum()}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
