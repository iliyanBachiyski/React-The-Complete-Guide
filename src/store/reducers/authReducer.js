import * as actionTypes from "../actions/actionConst";

const initialState = {
  isUserAuth: false,
  message: ""
};

const authReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actionTypes.AUTH_RESPONSE_ACTION:
      newState = {
        isUserAuth: true,
        message: action.payload.message
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default authReducer;
