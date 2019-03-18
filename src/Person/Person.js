import React from "react";
import "./Person.css";
const person = props => {
  const title = "Hello, this is simple functional(stateless) component!";
  const style = {
    backgroundColor: "#cceeff",
    border: "1px solid blue"
  };
  return (
    <div className="Person">
      <h3>{title}</h3>
      <h4>
        My name is {props.name}, and I am {props.age} years old!
      </h4>
      <input type="text" onChange={props.changeName} value={props.name} />
      <br />
      <button style={style} onClick={props.increaseAge}>
        Increase Age!
      </button>
      <button style={style} onClick={props.deletePerson}>
        Delete Person
      </button>
    </div>
  );
};

export default person;
