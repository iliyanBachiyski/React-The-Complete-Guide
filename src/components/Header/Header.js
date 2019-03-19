import React from "react";
import appModuleStyles from "../../App.module.css";

const header = props => {
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

export default header;
