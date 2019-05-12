import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const SideDrawer = props => {
  let attaachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) attaachedClasses = [classes.SideDrawer, classes.Open];

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attaachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo>Logo</Logo>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
