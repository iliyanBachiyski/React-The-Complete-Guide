import React from "react";

const person = props => {
  const title = "Hello, this is simple functional(stateless) component!";
  return (
    <div>
      <h3>{title}</h3>
      <h4>
        My name is {props.name}, and I am {props.age} years old!
      </h4>
      <input
        type="text"
        onChange={event => props.changeName(event, props.name)}
        value={props.name}
      />
      <button onClick={() => props.increaseAge(props.name)}>
        Increase Age!
      </button>
      <hr />
    </div>
  );
};

export default person;
