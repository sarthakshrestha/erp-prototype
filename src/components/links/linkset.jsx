import React from "react";
import "../styles/main-form.css"
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div>
        <h1 className="main-heading"><span className="red-text">/</span><span className="blue-text">/</span>Project-P</h1>
      </div>
      <h2 className="slogan"> simplifying digital presses </h2>
      <ul className="dropdown-menu">
        <h2><NavLink to="/order-item">Create an order</NavLink></h2>
        <h2>Request order information</h2>
        <h2>Help / Support</h2>
      </ul>
    </div>
  );
};

export default Dropdown;
