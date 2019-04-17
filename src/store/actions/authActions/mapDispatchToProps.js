import { submitAuthRequest } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    submitAuthRequest: data => dispatch(submitAuthRequest(data))
  };
};

export default mapDispatchToProps;
