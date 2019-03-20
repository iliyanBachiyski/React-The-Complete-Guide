import React, { useEffect } from "react";
import appModuleStyles from "../../App.module.css";

const header = props => {
  useEffect(() => {
    /**
     * This function will be executed when the component get (re)rendered!
     */
    console.log("[Header] Component is (Re)Rendered!");
  });
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
    <div>
      <h1>{props.title}</h1>
      <button className={classes.join(" ")} onClick={props.tooglePersonHandler}>
        Show/Hide Persons
      </button>
      <button className={buttonColorStyle} onClick={props.toogleCarsHandler}>
        Show/Hide Cars
      </button>
    </div>
  );
};

/**
 * With this memoization, we are preventing component re-rendering.
 * Into Class-based component this optimization can be implement in shouldComponentUpdate() method
 * It will be re-renderd only the props get changed.
 */
export default React.memo(header);
