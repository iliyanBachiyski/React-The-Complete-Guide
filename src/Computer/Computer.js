import React, { useState } from "react";
import computerStyles from "./Computer.module.css";

const computer = () => {
  const initialRAMValue = 128;
  const initialRAMExtension = "MB";
  const [computerState, setComputerState] = useState({
    ramValue: initialRAMValue,
    ramExtension: initialRAMExtension
  });

  const increaseRAMHandler = () => {
    setComputerState({
      ...computerState,
      ramValue: computerState.ramValue * 2
    });
  };

  const resetRAMHandler = () => {
    setComputerState({
      ...computerState,
      ramValue: initialRAMValue
    });
  };
  return (
    <div>
      <h3>Hello, this is simple functional(hook) component!</h3>
      <h4>
        My computer has {computerState.ramValue}
        {computerState.ramExtension} RAM!
      </h4>
      <button
        className={computerStyles.computerButton}
        onClick={increaseRAMHandler}
      >
        Increase RAM
      </button>
      <button
        className={computerStyles.computerButton}
        onClick={resetRAMHandler}
      >
        Reset RAM
      </button>
      <hr />
    </div>
  );
};

export default computer;
