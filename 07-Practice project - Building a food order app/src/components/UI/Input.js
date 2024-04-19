import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* {...props.input} makes all the properties in the nput object available to input tag for eg, type : "text" will be type = "text" fot the input tag */}
    </div>
  );
});

export default Input;
