import React from "react";
import Car from "./Car/Car";
import PropTypes from "prop-types";

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

cars.propTypes = {
  showCars: PropTypes.bool,
  cars: PropTypes.array
};
export default cars;
