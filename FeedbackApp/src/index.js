import React from "react";
import ReactDOM from "react-dom"; //it alllows us ton intract with document object.
import "./index.css";
import App from "./App";

//
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
