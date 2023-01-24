import React from "react";
import spinner from "../assets/R.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading.."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
