import authReducer from "./authReducer";
import * as actionTypes from "../actions/actionConst";

describe("Auth Reducer", () => {
  it("Check authentication state", () => {
    const mockedPayload = {
      response: {
        idToken: "Test-Token",
        localId: "Test-Id"
      }
    };
    const action = {
      type: actionTypes.AUTH_SUCCESS_ACTION,
      payload: mockedPayload
    };
    const updatedState = authReducer({}, action);
    expect(updatedState.authToken).toEqual("Test-Token");
    expect(updatedState.userId).toEqual("Test-Id");
    expect(updatedState.isUserAuth).toEqual(true);
    expect(updatedState.message).toEqual("Complete");
  });
  it("Check token expiration", () => {
    const action = {
      type: actionTypes.AUTH_TOKEN_EXPIRED_ACTION
    };
    const updatedState = authReducer({}, action);
    expect(updatedState.authToken).toBe(null);
    expect(updatedState.userId).toBe(null);
    expect(updatedState.isUserAuth).toEqual(false);
  });
});
