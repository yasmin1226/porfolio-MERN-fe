import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const NavBar = ({ isAuthenticated, logout }) => {
  const visitorLinks = (
    <ul className="navbar-nav navbar-right">
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
      </li>
      <span>/</span>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
  const authLinks = (
    <ul className="navbar-nav navbar-right">
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <span>/</span>

      <li className="nav-item">
        <a className="nav-link" href="/home" onClick={logout}>
          LogOut
        </a>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>

        <>{isAuthenticated ? authLinks : visitorLinks}</>

        {/* {isAuthenticated ? <>{authLinks}</>} */}
        {/* {!isAuthenticated && <>{visitorLinks}</>} */}
      </nav>
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(NavBar);
