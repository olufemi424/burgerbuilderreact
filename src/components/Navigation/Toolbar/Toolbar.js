import React from "react";
import classes from "./Toolbar.css";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <nav>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
      </ul>
    </nav>
  </header>
);

export default Toolbar;
