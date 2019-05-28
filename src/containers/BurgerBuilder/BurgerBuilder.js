import React, { Component } from "react";
import axios from "../../axios-orders";

import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummery";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.2,
  bacon: 1.1
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {},
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get(`https://project-ideas-bbc79.firebaseio.com/ingredients.json`)
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(err => this.setState({ error: true }));
  }

  updatePurchableState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);

    this.setState({
      purchasable: sum > 0
    });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchableState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchableState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert("You Continue");

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(
          this.state.ingredients[i]
        )}`
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    //return state with true of false base of the count
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Incredients cant be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseContinue={this.purchaseContinueHandler}
          purchaseCancel={this.purchaseCancelHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClose={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
