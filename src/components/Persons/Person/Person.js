import React, { useEffect } from "react";
import WithClass from "../../hoc/WithClass";
import personStyles from "./Person.module.css";
import Footer from "../../Footer/Footer";

const person = props => {
  /**
   * This function will be executed in every (Re)Rendering.
   */
  useEffect(() => {
    console.log("[Person] Component is (Re)Rendered!");
    /**
     * This function will be executed only once at the first component rendering.
     */
    return () => {
      console.log("[Person] Component is Destroying!");
    };
  }, []);
  const title = "Hello, this is simple functional(stateless) component!";
  return (
    <WithClass classes="card">
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
      <Footer />
    </WithClass>
  );
};

export default person;
