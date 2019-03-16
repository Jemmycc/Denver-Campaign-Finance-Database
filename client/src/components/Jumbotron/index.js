import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-5">{children}</div>;
}

export default Jumbotron;
