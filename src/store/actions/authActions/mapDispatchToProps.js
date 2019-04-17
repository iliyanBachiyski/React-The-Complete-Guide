import { submitAuthRequest } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    submitAuthRequest: () => dispatch(submitAuthRequest())
  };
};

export default mapDispatchToProps;
