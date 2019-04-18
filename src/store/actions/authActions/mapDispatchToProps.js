import { submitSignUpRequest } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    submitSignUpRequest: data => dispatch(submitSignUpRequest(data))
  };
};

export default mapDispatchToProps;
