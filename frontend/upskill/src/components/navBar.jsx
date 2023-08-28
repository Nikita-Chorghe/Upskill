import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navbarStyle = {
    backgroundColor: "#012734", // Replace with your desired background color
  };

  return (
    <nav className="navbar navbar-expand-lg px-5" style={navbarStyle}>
      <Link className="navbar-brand fw-bold text-white" to="/">
        UpSkill
      </Link>

      <div
        className="collapse navbar-collapse d-flex justify-content-between "
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <NavLink className="nav-link text-white" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/loginForm">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/userForm">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
