import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  const navbarStyle = {
    backgroundColor: "#012734", // Replace with your desired background color
    paddingBottom: 20,
  };
  return (
    <nav
      className="navbar navbar-expand-lg px-8 font-size:24px px-5"
      style={navbarStyle}
    >
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
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/tutors">
              Tutors
            </NavLink>
          </li>
        </ul>
        {!props.loggedIn && (
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
        )}
        {props.loggedIn && (
          <ul className="navbar-nav ">
            <li className="nav-item">
              <button
                className="nav-link text-white"
                onClick={props.logoutHandler}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
