import {
  increaseAge,
  tooglePersons,
  changePersonName,
  deletePersonName
} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onTooglePersons: () => dispatch(tooglePersons()),
    onIncreasePersonAge: personName => dispatch(increaseAge(personName)),
    onChangeName: (event, oldPersonName) =>
      dispatch(changePersonName(event, oldPersonName)),
    onDeletePerson: personIdx => dispatch(deletePersonName(personIdx))
  };
};

export default mapDispatchToProps;
