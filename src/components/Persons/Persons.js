import React, { useEffect } from "react";
import Person from "./Person/Person";

const persons = props => {
  /**
   * This function will be executed in every (Re)Rendering.
   */
  useEffect(() => {
    console.log("[Persons] Component is (Re)Rendered!");
  });

  /**
   * This function will be executed only once at the first component rendering.
   */
  useEffect(() => {
    console.log("[Persons] Component is Rendered for first time!");
  }, []);
  const persons = props.showPersons ? (
    props.persons.map((person, idx) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          increaseAge={() => props.increaseAge(person.name)}
          changeName={event => props.changeName(event, person.name)}
          deletePerson={() => props.deletePerson(idx)}
          key={person.id}
        />
      );
    })
  ) : (
    <p>Press the button to Show/Hide persons!</p>
  );
  return <div>{persons}</div>;
};

export default persons;
