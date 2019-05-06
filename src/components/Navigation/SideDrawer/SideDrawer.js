import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo>Logo</Logo>
      </div>
      <nav>
        <NavigationItems>Item 1</NavigationItems>
      </nav>
    </div>
  );
};

export default SideDrawer;
