import React from "react";
import classes from "./PostInput.module.css";

const postInput = props => (
  <div className={classes.Input}>
    <label className={classes.Label}>{props.title}</label>
    <input
      {...props.config}
      className={classes.InputElement}
      onChange={props.textChangeHandler}
    />
  </div>
);

export default postInput;
