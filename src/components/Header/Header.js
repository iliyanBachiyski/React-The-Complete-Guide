import React, { useEffect, useRef, Fragment } from "react";
import AuthContext from "../../context/auth-context";
import Navigation from "../Navigation/Navigation";
import appModuleStyles from "../../App.module.css";
import { withRouter } from "react-router-dom";

const header = props => {
  const personButtonRef = useRef(null);
  useEffect(() => {
    /**
     * This function will be executed when the component get (re)rendered!
     */
    console.log("[Header] Component is (Re)Rendered!");
  });

  useEffect(() => {
    personButtonRef.current.click();
  }, []);
  let buttonColorStyle = appModuleStyles.green;
  const classes = [];
  if (props.personsLength <= 1) {
    classes.push(appModuleStyles.red, appModuleStyles.redBold);
  }
  if (props.personsLength === 2) {
    classes.push(appModuleStyles.yellow, appModuleStyles.yellowBold);
  }
  if (props.personsLength >= 3) {
    classes.push(appModuleStyles.green, appModuleStyles.greenBold);
  }
  return (
    <Fragment>
      <Navigation />
      <h1>{props.title}</h1>
      <button
        className={classes.join(" ")}
        onClick={props.tooglePersonHandler}
        ref={personButtonRef}
        disabled={props.location.pathname !== "/"}
      >
        Show/Hide Persons
      </button>
      <button
        className={buttonColorStyle}
        onClick={props.toogleCarsHandler}
        disabled={props.location.pathname !== "/cars"}
      >
        Show/Hide Cars
      </button>
      <AuthContext.Consumer>
        {context => (
          <button
            className={appModuleStyles.green}
            onClick={context.login}
            disabled={!props.showCars || props.location.pathname !== "/cars"}
          >
            Log in
          </button>
        )}
      </AuthContext.Consumer>
    </Fragment>
  );
};

/**
 * With this memoization, we are preventing component re-rendering.
 * Into Class-based component this optimization can be implement in shouldComponentUpdate() method
 * It will be re-renderd only the props get changed.
 */
export default withRouter(React.memo(header));
