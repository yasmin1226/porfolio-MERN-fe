import React, { useState } from "react";
import { connect } from "react-redux";
//import axios from "axios";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import { Link, Redirect } from "react-router-dom";

import propTypes from "prop-types";
const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { fname, lname, email, password, confirmPassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password || !confirmPassword) {
      setAlert("all fields required", "danger");
    } else if (password !== confirmPassword || password.length < 8) {
      setAlert("password dont match& more than 8", "danger");
    } else {
      //   const newUser = {
      //     fname,
      //     lname,
      //     email,
      //     password,
      //     confirmPassword,
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     };
      //     const body = JSON.stringify(newUser);
      //     console.log("body", body);
      //     const res = await axios.post("/api/user/signup", body, config);
      //     //const res = await axios.get("/api/user");
      //     console.log("res", res);
      //   } catch (err) {
      //     console.log("err", err);
      //   }
      //   console.log(formData);
      register({ fname, lname, email, password, confirmPassword });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <fieldset>
          <legend>Register</legend>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                placeholder="First Name"
                value={fname}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
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
            <small name="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
              minLength="8"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Password"
              value={confirmPassword}
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
Register.propTypes = {
  setAlert: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
