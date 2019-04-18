import { submitAuthRequest } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    submitAuthRequest: (data, isSignUp) =>
      dispatch(submitAuthRequest(data, isSignUp))
  };
};

export default mapDispatchToProps;
