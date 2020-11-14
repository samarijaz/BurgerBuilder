import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.itemLabel}</div>
      <button
        className={classes.Less}
        onClick={props.sub}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default button;
