import React from "react";
import Aux from "../../HOC/Auxx";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
