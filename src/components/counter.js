import React, { Component } from "react";

// React.Fragment = single Div in HTML
class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value != this.props.counter.value) {
      console.log("prevProps", prevProps);
      console.log("prevState", prevState);
    }
  }

  render() {
    console.log("Counter.rendered.");
    return (
      <div>
        <span> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2- badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    // allow to return jsx syntax
    //return value == 0 ? <h1>Zero</h1> : value;
    //return value;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
