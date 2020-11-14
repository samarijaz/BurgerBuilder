import React from "react";
import Aux from "../../../../../HOC/Auxx";

const orderSummary = (props) => {
  //Object to array convertion
  const ingred = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item}>
        {item}:{props.ingredients[item]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <ul>{ingred}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
