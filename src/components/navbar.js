import React, { Component } from "react";

// rect will automatic pick the props.totalCounters into this function input param
// this is stateless Functional Component - sfc
// in life cycle hook not allow to those function such like componentDidMount

const NavBar = ({ totalCounters }) => {
  console.log("NavBar.rendered.");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NavBar{""}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
