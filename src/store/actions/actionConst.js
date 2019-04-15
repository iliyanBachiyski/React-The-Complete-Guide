export const TOOGLE_PERSONS_ACTION = "TOOGLE_PERSONS";
export const INCREASE_AGE_ACTION = "INCREASE_AGE";
export const CHANGE_PERSON_NAME_ACTION = "CHANGE_PERSON_NAME";
export const DELETE_PERSON_ACTION = "DELETE_PERSON";

export const INCREASE_RAM_ACTION = "INCREASE_RAM";
export const RESET_RAM_ACTION = "RESET_RAM";
export const SIMULATE_ERROR_ACTION = "SIMULATE_ERROR";

export const tooglePersons = () => {
  return { type: TOOGLE_PERSONS_ACTION };
};

export const increaseAge = personName => {
  return { type: INCREASE_AGE_ACTION, payload: { personName } };
};

export const changePersonName = (event, oldPersonName) => {
  return { type: CHANGE_PERSON_NAME_ACTION, payload: { event, oldPersonName } };
};

export const deletePersonName = personIdx => {
  return { type: DELETE_PERSON_ACTION, payload: { personIdx } };
};

export const increaseRAM = () => {
  return { type: INCREASE_RAM_ACTION };
};

export const resetRAM = () => {
  return { type: RESET_RAM_ACTION };
};

export const simulateError = () => {
  return { type: SIMULATE_ERROR_ACTION };
};
