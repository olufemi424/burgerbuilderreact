import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

export class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHanderler = e => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "olufemi",
        address: {
          street: "test stress",
          zipCode: "23424"
        },
        email: "email@email.com",
        deliveryMode: "faster"
      }
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
      })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postalCode"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHanderler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
