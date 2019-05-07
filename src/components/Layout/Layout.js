import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerCloseHandle = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <SideDrawer
          closed={this.sideDrawerCloseHandle}
          open={this.state.showSideDrawer}
        />
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
