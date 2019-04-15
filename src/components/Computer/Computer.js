import React, { Fragment } from "react";
import mapDispatchToProps from "../../store/actions/computerActions/mapDispatchToProps";
import { connect } from "react-redux";
import computerStyles from "./Computer.module.css";

const computer = props => {
  return (
    <Fragment>
      <h3>Hello, this is simple functional(hook) component!</h3>
      <h4>
        My computer has {props.ramValue}
        {props.ramExtension} RAM!
      </h4>
      <button
        className={computerStyles.computerButton}
        onClick={props.increaseRAMHandler}
      >
        Increase RAM
      </button>
      <button
        className={computerStyles.computerButton}
        onClick={props.resetRAMHandler}
      >
        Reset RAM
      </button>
      <button
        className={computerStyles.computerButton}
        onClick={props.simulateErrorHandler}
      >
        Simulate Error
      </button>
      <hr />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ramValue: state.compRed.ramValue,
    ramExtension: state.compRed.initialRAMExtension
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(computer);
