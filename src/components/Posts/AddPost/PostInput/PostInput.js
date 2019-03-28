import React from "react";

const postInput = props => (
  <div>
    <h5>{props.title}</h5>
    <input type="text" onChange={props.textChangeHandler} />
  </div>
);

export default postInput;
