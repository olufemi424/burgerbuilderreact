import React, { Component } from "react";
import Order from "../../components/Order/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

export class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            ingredients={order.ingredient}
            price={order.price}
            key={order.id}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
