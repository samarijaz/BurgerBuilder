import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../HOC/Auxx";
import Summary from "../../components/Burger/BuildControls/Buttons/OrderSummary/OrderSummary";

const PRICES = {
  salad: 0.5,
  cheese: 0.25,
  meat: 1.25,
  bacon: 0.75,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurhaseState(update) {
    //Creating a copy of state
    // get the keys: salade, bacon, etc...
    const sum = Object.keys(update)
      .map((item) => {
        // get value of salad, bacon, meat, etc....
        return update[item];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCounted = oldCount + 1;
    const update = {
      ...this.state.ingredients,
    };
    update[type] = updateCounted;
    const priceAdd = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAdd + oldPrice;
    this.setState({ totalPrice: newPrice, ingredients: update });
    this.updatePurhaseState(update);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCounted = oldCount - 1;

    const update = {
      ...this.state.ingredients,
    };
    update[type] = updateCounted;
    const priceSub = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSub;

    this.setState({ totalPrice: newPrice, ingredients: update });
    this.updatePurhaseState(update);
  };

  // have to use arrow function when using "this" keyword
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  //Close modal on click
  closedHandler = () => {
    this.setState({ purchasing: false });
  };
  render() {
    //Copying of Object
    const disableInfo = {
      ...this.state.ingredients,
    };
    //True or False
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.closedHandler}>
          <Summary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          Add={this.addIngredientHandler}
          Sub={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice.toFixed(2)}
          purchaseable={this.state.purchaseable}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
