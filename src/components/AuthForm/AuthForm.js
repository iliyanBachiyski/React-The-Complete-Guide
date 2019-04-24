import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "./FormInput/FormInput";
import Spinner from "../Spinner/Spinner";
import mapDispatchToProps from "../../store/actions/authActions/mapDispatchToProps";

class AuthForm extends Component {
  state = {
    inputs: {
      email: {
        label: "Email",
        config: {
          name: "email",
          placeholder: "Enter your email",
          type: "text"
        },
        value: "",
        required: true,
        isValid: false
      },
      password: {
        label: "Passowrd",
        config: {
          name: "password",
          placeholder: "Enter your password",
          type: "password"
        },
        value: "",
        required: true,
        isValid: false
      }
    },
    isFormValid: false,
    isSignUpMode: true
  };

  inputChangeHandler = event => {
    const text = event.target.value;
    const elemName = event.target.name;
    const element = this.state.inputs[elemName];
    const isFieldValid = text !== "";
    const updatedInput = {
      ...element,
      config: {
        ...element.config
      },
      value: text,
      isValid: isFieldValid
    };
    this.setState(prevState => {
      let isFormValid = true;
      for (let key in prevState.inputs) {
        if (key === elemName) {
          isFormValid = updatedInput.isValid && isFormValid;
        } else {
          isFormValid = prevState.inputs[key].isValid && isFormValid;
        }
      }
      return {
        inputs: {
          ...prevState.inputs,
          [elemName]: updatedInput
        },
        isFormValid
      };
    });
  };

  submitHandler = () => {
    const data = {
      email: this.state.inputs["email"].value,
      password: this.state.inputs["password"].value
    };
    this.props.submitAuthRequest(data, this.state.isSignUpMode);
  };

  switchAuthMode = () => {
    this.setState(prevState => {
      return {
        isSignUpMode: !prevState.isSignUpMode
      };
    });
  };
  render() {
    let inputs = [];
    let error = null;
    for (let key in this.state.inputs) {
      const item = this.state.inputs[key];
      inputs.push(
        <FormInput
          key={item.config.name}
          label={item.label}
          inputValue={item.value}
          onInputChange={this.inputChangeHandler}
          config={item.config}
          isRequired={item.required}
        />
      );
    }
    if (this.props.loading) {
      inputs = <Spinner />;
    }
    if (this.props.error) {
      error = (
        <div>
          <h3 style={{ color: "red" }}>{this.props.error.toString()}</h3>
        </div>
      );
    }
    const buttonAuthText = this.state.isSignUpMode ? "Sign Up" : "Sign In";
    const switchToButtonText = this.state.isSignUpMode ? "Sign In" : "Sign Up";
    return (
      <div className="card">
        {inputs}
        {error}
        <button disabled={!this.state.isFormValid} onClick={this.submitHandler}>
          {buttonAuthText}
        </button>
        <button onClick={this.switchAuthMode}>
          Switch to {switchToButtonText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserAuth: state.authRed.isUserAuth,
    message: state.authRed.message,
    loading: state.authRed.loading,
    error: state.authRed.error
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
