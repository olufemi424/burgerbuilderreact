import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <h4>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </h4>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
