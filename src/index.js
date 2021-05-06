import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./proxy";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <button type="button" class="btn btn-outline-primary">
      Primary
    </button> */}
  </React.StrictMode>,
  document.getElementById("root")
);
