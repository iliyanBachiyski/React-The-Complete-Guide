import React from "react";

const person = props => {
  const title = "Hello, this is simple functional(stateless) component!";
  return (
    <div>
      <h3>{title}</h3>
      <h4>
        My name is {props.name}, and I am {props.age} years old!
      </h4>
      <hr />
    </div>
  );
};

export default person;
