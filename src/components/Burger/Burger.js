import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  //Convert object to Array

  //Object.keys(props.ingredients)---> [cheese,bacon,salad].map
  //igKey ---> [...Array(props.ingredients)]
  let trans = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} item={igKey} />;
      });
    })
    .reduce((arr, cur) => {
      return arr.concat(cur);
    }, []);

  if (trans.length === 0) {
    trans = <div>Please Start Adding Ingredients!</div>;
  }

  //Render item to the frontend
  return (
    <div className={classes.Burger}>
      <BurgerIngredients item="top" />
      {trans}
      <BurgerIngredients item="bread-bottom" />
    </div>
  );
};

export default burger;
