import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
//import Counters from "../src/components/counters"; // Counter is default export , so we dont need {}

class App extends Component {
  constructor() {
    super();
    console.log("App.Constructor");
  }
  componentDidMount() {
    // started include data from DB once component is rendered
    // this.setState({movies})
    console.log("App.componentDidMount");
  }

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // event
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    //console.log("Event handler called => ", counterId);
  };

  render() {
    console.log("App.rendered.");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
