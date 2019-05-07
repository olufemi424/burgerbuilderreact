import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClose} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100%)",
        opacity: props.show ? "1" : 0,
        pointerEvents: props.show ? null : "none"
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
