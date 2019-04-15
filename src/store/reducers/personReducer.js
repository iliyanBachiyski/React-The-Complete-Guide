import {
  INCREASE_AGE_ACTION,
  TOOGLE_PERSONS_ACTION,
  CHANGE_PERSON_NAME_ACTION,
  DELETE_PERSON_ACTION
} from "../actionConst";

const initialState = {
  showPersons: false,
  persons: [
    { id: "personUniqueKey1", name: "Iliyan", age: 24 },
    { id: "personUniqueKey2", name: "Veronika", age: 23 },
    { id: "personUniqueKey3", name: "Ivelin", age: 22 }
  ]
};

const increasePersonAge = (currentPersons, personName) => {
  const personIndex = getPersonIndexByName(currentPersons, personName);
  if (personIndex > -1) {
    const person = { ...currentPersons[personIndex] };
    person.age++;
    const persons = [...currentPersons];
    persons[personIndex] = person;
    return persons;
  }
};

const changeName = (currentPersons, event, oldPersonName) => {
  const personIndex = getPersonIndexByName(currentPersons, oldPersonName);
  if (personIndex > -1) {
    const person = { ...currentPersons[personIndex] };
    person.name = event.target.value;
    const personsArray = currentPersons.filter(person => true);
    personsArray[personIndex] = person;
    return personsArray;
  }
};

const getPersonIndexByName = (persons, name) => {
  const personIndex = persons.findIndex(person => {
    return person.name === name;
  });
  return personIndex;
};

const deletePerson = (currentPersons, index) => {
  const persons = [...currentPersons];
  persons.splice(index, 1);
  return persons;
};

const personReducer = (state = initialState, action) => {
  let newState = null;
  let updatedPersons = null;
  switch (action.type) {
    case TOOGLE_PERSONS_ACTION:
      newState = { ...state, showPersons: !state.showPersons };
      break;
    case INCREASE_AGE_ACTION:
      updatedPersons = increasePersonAge(
        state.persons,
        action.payload.personName
      );
      newState = { ...state, persons: updatedPersons };
      break;
    case CHANGE_PERSON_NAME_ACTION:
      updatedPersons = changeName(
        state.persons,
        action.payload.event,
        action.payload.oldPersonName
      );
      newState = { ...state, persons: updatedPersons };
      break;
    case DELETE_PERSON_ACTION:
      updatedPersons = deletePerson(state.persons, action.payload.personIdx);
      newState = { ...state, persons: updatedPersons };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default personReducer;
