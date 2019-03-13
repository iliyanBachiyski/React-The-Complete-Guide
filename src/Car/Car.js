import React, { Component } from "react";

export default class Car extends Component {
  render() {
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
