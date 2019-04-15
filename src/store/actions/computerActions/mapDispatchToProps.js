import {
  INCREASE_RAM_ACTION,
  RESET_RAM_ACTION,
  SIMULATE_ERROR_ACTION
} from "../../actionConst";

const mapDispatchToProps = dispatch => {
  return {
    increaseRAMHandler: () => dispatch({ type: INCREASE_RAM_ACTION }),
    resetRAMHandler: () => dispatch({ type: RESET_RAM_ACTION }),
    simulateErrorHandler: () => dispatch({ type: SIMULATE_ERROR_ACTION })
  };
};

export default mapDispatchToProps;
