import React, { Component } from "react";

export default class Car extends Component {
  /**
   * This function will prevent our component from re-rendering if there have no props changes!
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.props.hp !== nextProps.hp) {
      return true;
    }
    if (this.props.children !== nextProps.children) {
      return true;
    }
    return false;
  }

  /**
   * This function will be executed when component is destroying.
   */
  componentWillUnmount() {
    console.log("[Car] Component is Destroying!");
  }
  render() {
    console.log("[Car] Component is (Re)Rendered!");
    let childElement;
    if (this.props.children) {
      childElement = <h5>{this.props.children}</h5>;
    }
    return (
      <div>
        <h3>Hello, this is simple class component!</h3>
        <h4>
          I have {this.props.color} car with {this.props.hp} hp's!
        </h4>
        {childElement}
        <hr />
      </div>
    );
  }
}
