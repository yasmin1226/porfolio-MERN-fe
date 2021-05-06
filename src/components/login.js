import React, { useState } from "react";
import { connect } from "react-redux";
//import axios from "axios";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";
import { Link, Redirect } from "react-router-dom";
import propTypes from "prop-types";
const Login = ({ login, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert("all fields required", "danger");
    } else {
      login({ email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <fieldset>
          <legend>LogIn</legend>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};
Login.propTypes = {
  setAlert: propTypes.func.isRequired,
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, login })(Login);
