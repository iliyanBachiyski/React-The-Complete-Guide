const initialState = {
  showPersons: false,
  persons: [
    { id: "personUniqueKey1", name: "Iliyan", age: 24 },
    { id: "personUniqueKey2", name: "Veronika", age: 23 },
    { id: "personUniqueKey3", name: "Ivelin", age: 22 }
  ]
};

const personReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case "TOOGLE_PERSONS":
      newState = { ...state, showPersons: !state.showPersons };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default personReducer;
