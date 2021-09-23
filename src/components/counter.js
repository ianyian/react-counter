import React, { Component } from "react";

// React.Fragment = single Div in HTML
class Counter extends React.Component {
  state = {
    count: 0,
    imageurl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 80,
    fontWeight: "bold",
  };

  renderTag() {
    if (this.state.tags.length === 0) return <p>There is no tags !</p>;

    return (
      <ul>
        <li>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <div>{this.renderTag()}</div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2- badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // allow to return jsx syntax
    //return count == 0 ? <h1>Zero</h1> : count;

    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
