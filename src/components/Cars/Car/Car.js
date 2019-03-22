import React, { Component, Fragment } from "react";
import AuthContext from "../../../context/auth-context";
import CompanyContext from "../../../context/company-context";
import PropTypes from "prop-types";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.titleElementRef = React.createRef();
  }

  /**
   * It is better to use our footer to display the company data,
   * but we are just demonstrating possibility of using context without <CompanyContext.Consumer></CompanyContext.Consumer>
   */
  static contextType = CompanyContext;

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
        <AuthContext.Consumer>
          {context =>
            context.isAuthenticated ? (
              <p style={{ color: "green" }}>Authenticated!</p>
            ) : (
              <p style={{ color: "red" }}>Please Log in!</p>
            )
          }
        </AuthContext.Consumer>
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
        <p>Company Name: {this.context.companyName}</p>
        <p>Company Owner: {this.context.companyOwner}</p>
        <hr />
      </Fragment>
    );
  }
}

Car.propTypes = {
  color: PropTypes.string,
  hp: PropTypes.number
};
