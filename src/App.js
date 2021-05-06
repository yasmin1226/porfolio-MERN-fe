import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./components/home";
import LogIn from "./components/login";
import Register from "./components/register";
import AboutUs from "./components/aboutus";
import Profile from "./components/profile";
import Alert from "./components/alert";
import Posts from "./components/posts";

import store from "./store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Alert />
          {/* <Posts /> */}

          <div className="container">
            <Switch>
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} /> */}

              <Route exact path="/" component={Posts} />

              <Route exact path="/home" component={Posts} />

              <Route exact path="/login" component={LogIn} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/aboutus" component={AboutUs} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
