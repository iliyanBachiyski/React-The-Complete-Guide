import React from "react";
import Car from "./Car/Car";

const cars = props => {
  const cars = props.showCars ? (
    props.cars.map(car => {
      return <Car color={car.color} hp={car.hp} key={car.id} />;
    })
  ) : (
    <p>Press the button to Show/Hide cars!</p>
  );
  return <div>{cars}</div>;
};

export default cars;
