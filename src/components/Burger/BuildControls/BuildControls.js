import React from "react";
import classes from "./BuildControl.module.css";
import Button from "./Buttons/Button";
import OrderButton from "./Order.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <h4>Current Price: ${props.price}</h4>
      {controls.map((item) => (
        <Button
          added={() => props.Add(item.type)}
          key={item.label}
          sub={() => props.Sub(item.type)}
          itemLabel={item.label}
          disabled={props.disabled[item.type]}
        />
      ))}
      <button
        className={OrderButton.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
