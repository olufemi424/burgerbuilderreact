import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("Model will update");
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClose} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100%)",
            opacity: this.props.show ? "1" : 0,
            pointerEvents: this.props.show ? null : "none"
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
