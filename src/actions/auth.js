import api from "../apis/jsonPlaceHolder";

import axios from "axios";
//import api from "../utils/api";
import { setAlert } from "./alert";
//import setAuthToken from "../utiles/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load User
// export const loadUser = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get("/auth");

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// Register User
export const register = ({
  fname,
  lname,
  email,
  password,
  confirmPassword,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    fname,
    lname,
    email,
    password,
    confirmPassword,
  });
  console.log("body", body);
  try {
    console.log("try");
    const res = await api.post("/user/signup", body, config);
    console.log("res.data", res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    console.log(res.data.token);
  } catch (err) {
    if (err.response) {
      console.log("err.response", err.response.data);
      console.log("err");
      console.log("e", err);
      const error = err.response.data;

      console.log(error);
      // if (errors) {
      if (error) {
        dispatch(setAlert(error.message, "danger"));

        //   errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }

    // console.log("err",response.message);

    //const  errors = err.response.data;
  }
  //   try {
  //     // const res = await api.post("/users", formData);
  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: res.data,
  //     });
  //     dispatch(loadUser());
  //   } catch (err) {
  //     const errors = err.response.data.errors;
  //     if (errors) {
  //       errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
  //     }
  //     dispatch({
  //       type: REGISTER_FAIL,
  //     });
  //   }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });
  console.log("body", body);

  try {
    const res = await api.post("/user/login", body, config);
    dispatch(setAlert("sucess", "primary"), 5);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    if (err.response) {
      console.log("err.response", err.response.data);
      console.log("err");
      console.log("e", err);
      const error = err.response.data;

      console.log(error);
      // if (errors) {
      if (error) {
        dispatch(setAlert(error.message, "danger"));

        //   errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};

// // Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
