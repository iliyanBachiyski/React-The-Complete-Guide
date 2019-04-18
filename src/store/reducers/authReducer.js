import * as actionTypes from "../actions/actionConst";

const initialState = {
  isUserAuth: false,
  authToken: null,
  userId: null,
  message: "",
  error: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS_ACTION:
      newState = {
        ...state,
        authToken: action.payload.response.idToken,
        userId: action.payload.response.localId,
        isUserAuth: true,
        loading: false,
        message: "Complete",
        error: null
      };
      break;
    case actionTypes.AUTH_START_ACTION:
      newState = {
        ...state,
        loading: true
      };
      break;
    case actionTypes.AUTH_ERROR_ACTION:
      newState = {
        ...state,
        loading: false,
        error: action.payload.response.error
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default authReducer;
