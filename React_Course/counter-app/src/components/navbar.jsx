import React, { Component } from "react";

// Stateless Functional Component (No Class Use)
// In this case can't use lifecycle hooks (Mount, Update, Unmount)

//const Navbar = (props) => {
// Object destructuring
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
