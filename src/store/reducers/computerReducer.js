import {
  INCREASE_RAM_ACTION,
  RESET_RAM_ACTION,
  SIMULATE_ERROR_ACTION
} from "../actionConst";

const initialRAMValue = 128;

const initialState = {
  ramValue: 128,
  initialRAMExtension: "MB"
};

const increaseRAMHandler = state => {
  const newState = { ...state };
  newState.ramValue = state.ramValue * 2;
  return newState;
};

const resetRAMHandler = state => {
  const newState = { ...state };
  newState.ramValue = initialRAMValue;
  return newState;
};

const simulateError = () => {
  throw new Error("Something Went Wrong...!");
};

const computerReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case INCREASE_RAM_ACTION:
      newState = increaseRAMHandler(state);
      break;
    case RESET_RAM_ACTION:
      newState = resetRAMHandler(state);
      break;
    case SIMULATE_ERROR_ACTION:
      newState = { ...state };
      simulateError();
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default computerReducer;
