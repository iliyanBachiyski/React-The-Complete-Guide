import {
  INCREASE_AGE_ACTION,
  TOOGLE_PERSONS_ACTION,
  CHANGE_PERSON_NAME_ACTION,
  DELETE_PERSON_ACTION
} from "../actionConst";

const mapDispatchToProps = dispatch => {
  return {
    onTooglePersons: () => dispatch({ type: TOOGLE_PERSONS_ACTION }),
    onIncreasePersonAge: personName =>
      dispatch({ type: INCREASE_AGE_ACTION, payload: { personName } }),
    onChangeName: (event, oldPersonName) =>
      dispatch({
        type: CHANGE_PERSON_NAME_ACTION,
        payload: { event, oldPersonName }
      }),
    onDeletePerson: personIdx =>
      dispatch({ type: DELETE_PERSON_ACTION, payload: { personIdx } })
  };
};

export default mapDispatchToProps;
