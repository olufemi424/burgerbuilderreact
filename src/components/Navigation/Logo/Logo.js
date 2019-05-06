import React from "react";

import butgerLogo from "../../../assets/Images/burgerlogo.png";
import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.Logo}>
    <img src={butgerLogo} alt="logo" />
  </div>
);

export default Logo;
