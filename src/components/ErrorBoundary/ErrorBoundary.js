import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch(error, message) {
    this.setState({ hasError: true, errorMessage: error });
  }
  render() {
    if (this.state.hasError) {
      return <div>{this.state.errorMessage}</div>;
    }
    return this.props.children;
  }
}
