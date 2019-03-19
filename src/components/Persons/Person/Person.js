import React from "react";
import personStyles from "./Person.module.css";

const person = props => {
  const title = "Hello, this is simple functional(stateless) component!";
  return (
    <div className={personStyles.Person}>
      <h3>{title}</h3>
      <h4>
        My name is {props.name}, and I am {props.age} years old!
      </h4>
      <input type="text" onChange={props.changeName} value={props.name} />
      <br />
      <button className={personStyles.personButton} onClick={props.increaseAge}>
        Increase Age!
      </button>
      <button
        className={personStyles.personButton}
        onClick={props.deletePerson}
      >
        Delete Person
      </button>
    </div>
  );
};

export default person;
