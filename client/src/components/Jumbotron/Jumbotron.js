import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", marginTop: 30 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
