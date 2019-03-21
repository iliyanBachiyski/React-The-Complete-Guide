import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.titleElementRef = React.createRef();
  }

  componentDidMount() {
    this.titleElementRef.current.style.color = "#edb717";
    this.subHeaderElement.style.color = this.props.color.toLowerCase();
  }
  /**
   * This function will prevent our component from re-rendering if there have no props changes!
   * We can use PureComponent instead of checking all of our incoming props!
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
      <Fragment>
        <h3 ref={this.titleElementRef}>
          Hello, this is simple class component!
        </h3>
        <h4
          ref={subHeaderElement => {
            this.subHeaderElement = subHeaderElement;
          }}
        >
          I have {this.props.color} car with {this.props.hp} hp's!
        </h4>
        {childElement}
        <hr />
      </Fragment>
    );
  }
}

Car.propTypes = {
  color: PropTypes.string,
  hp: PropTypes.number
};
