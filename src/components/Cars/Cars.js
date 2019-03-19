import React from "react";
import Car from "./Car/Car";

const cars = props => {
  let cars = null;
  if (props.showCars) {
    cars = (
      <div>
        {props.cars.map(car => {
          return <Car color={car.color} hp={car.hp} key={car.id} />;
        })}
      </div>
    );
  } else {
    cars = (
      <div>
        <p>Press the button to Show/Hide cars!</p>
      </div>
    );
  }
  return <div>{cars}</div>;
};

export default cars;
