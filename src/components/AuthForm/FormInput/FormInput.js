import React from "react";
import classes from "./FormInput.module.css";

const formInput = props => {
  return (
    <div className={classes.FormContainer}>
      <label className={classes.Label}>{props.label}</label>
      <input
        className={classes.FormInput}
        value={props.inputValue}
        onChange={props.onInputChange}
        {...props.config}
      />
    </div>
  );
};

export default React.memo(formInput);
