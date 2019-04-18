import { submitAuthRequest, logOutAction } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    submitAuthRequest: (data, isSignUp) =>
      dispatch(submitAuthRequest(data, isSignUp)),
    logOutRequest: () => {
      dispatch(logOutAction());
    }
  };
};

export default mapDispatchToProps;
