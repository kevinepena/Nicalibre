import React from "react";
import "./Loader.css";

const Loader = props => (
    <div className={"loader " + (props.paging ? "active" : "")}>
    <img src="svg/loader.svg" />
  </div>
);

export default Loader;