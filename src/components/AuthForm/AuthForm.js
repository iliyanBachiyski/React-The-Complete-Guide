import React, { Component } from "react";
import FormInput from "./FormInput/FormInput";
import classes from "./AuthForm.module.css";

export default class AuthForm extends Component {
  state = {
    inputs: {
      username: {
        label: "Username",
        config: {
          name: "username",
          placeholder: "Enter your username",
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
    isFormValid: false
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

  submitSignInHandler = () => {
    //TODO dispatch action to submit form
  };

  render() {
    const inputs = [];
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
    return (
      <div className="card">
        {inputs}
        <button
          disabled={!this.state.isFormValid}
          className={classes.Button}
          onClick={this.submitSignInHandler}
        >
          Sign Up
        </button>
      </div>
    );
  }
}
