//import React, { Component } from "react";
import { useFetch } from "../hooks/useFetch";
import React, { useState } from "react";
import { connect } from "react-redux";
//import axios from "axios";
import { setAlert } from "../actions/alert";
//import { login } from "../actions/auth";
import { Link, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import "../css/profile.css";
const Profile = (props) => {
  console.log("start", props);
  //  try {
  const [
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    setPhoto,
    photo,
  ] = useFetch("607ced478a41d90634d054a8");
  console.log("props to now user", props);

  console.log(fname, photo);
  // } catch (err) {
  //   console.log(err);
  // }
  return (
    <>
      {/* <div className="card" style={{ width: "18rem" }}>
        <img src="../img/users/avatar.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {fname} {lname}
          </h5>
          <p className="card-text">{email}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}

      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                  {fname} {lname}
                </h5>
                <h6>Web Developer and Designer</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <div>about</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <label>First Name</label>
                </div>
                <div className="col-md-6">
                  <p>{fname}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Last Name</label>
                </div>
                <div className="col-md-6">
                  <p>{lname}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Profession</label>
                </div>
                <div className="col-md-6">
                  <p>Web Developer and Designer</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
// Profile.propTypes = {
//   setAlert: propTypes.func.isRequired,
//   // login: propTypes.func.isRequired,
//   isAuthenticated: propTypes.bool,
// };
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });
// export default connect(mapStateToProps, { setAlert })(Profile);
export default Profile;
