import React from "react";

import butgerLogo from "../../../assets/Images/burgerlogo.png";
import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={butgerLogo} alt="logo" />
  </div>
);

export default Logo;
