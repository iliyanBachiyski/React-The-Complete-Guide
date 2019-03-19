import React from "react";
import Person from "./Person/Person";

const persons = props => {
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
