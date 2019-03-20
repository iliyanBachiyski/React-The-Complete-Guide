import React, { useEffect } from "react";
import personStyles from "./Person.module.css";

const person = props => {
  /**
   * This function will be executed in every (Re)Rendering.
   */
  useEffect(() => {
    console.log("[Person] Component is (Re)Rendered!");
    /**
     * This function will be executed when component is destroying.
     */
    return () => {
      console.log("[Person] Component is Destroying!");
    };
  }, []);
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
