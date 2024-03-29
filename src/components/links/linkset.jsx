import React from "react";
import "../styles/main-form.css";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="top-bar">
        <ul>
          <li> Home </li>
        </ul>
        <ul>
          <li> About Project P </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/sign-in">Sign In </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h1 className="main-heading">
          <span className="red-text">/</span>
          <span className="blue-text">/</span>Project-P
          <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
        </h1>
       
      </div>
      
      <h2 className="slogan"> simplifying digital presses </h2>
      <ul className="dropdown-menu">
        <h2>
          <NavLink to="/order-item">Place an order</NavLink>
        </h2>
        <h2>
          <NavLink to="/token-order">Request order information</NavLink>
        </h2>
        <h2>
          <NavLink to="/cost-calc">Calculate Cost</NavLink>
        </h2>
        <h2>
          <NavLink to="/test-job-card">Test Job Card</NavLink>
        </h2>
      </ul>
    </div>
  );
};

export default Dropdown;
