import React, { Component } from "react";
import Person from "./Person/Person";
import Car from "./Car/Car";
import Computer from "./Computer/Computer";
import "./App.css";

class App extends Component {
  state = {
    showPersons: false,
    showCars: false,
    title: "Hello from App Component!",
    persons: [
      { name: "Iliyan", age: 24 },
      { name: "Veronika", age: 23 },
      { name: "Ivelin", age: 22 }
    ],
    cars: [
      { color: "Red", hp: 240 },
      { color: "Grey", hp: 101 },
      { color: "Blue", hp: 150 }
    ]
  };

  changeTitleHandler = () => {
    this.setState({ title: "Hello from changed title!" });
  };

  increasePersonAge = personName => {
    const newPersonsArray = this.state.persons.map(person => {
      if (person.name === personName) {
        person.age++;
      }
      return person;
    });
    this.setState({ persons: newPersonsArray });
  };

  changeNameHandler = (event, name) => {
    const newPersonsArray = this.state.persons.map(person => {
      if (person.name === name) {
        person.name = event.target.value;
      }
      return person;
    });
    this.setState({ persons: newPersonsArray });
  };

  tooglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  render() {
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          {this.state.cars.map(car => {
            return <Car color={car.color} hp={car.hp} />;
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
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick={this.tooglePersonHandler}>Show/Hide Persons</button>
        <button onClick={this.toogleCarsHandler}>Show/Hide Cars</button>
        <hr />
        {this.state.showPersons ? (
          <div>
            {this.state.persons.map(person => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  increaseAge={this.increasePersonAge}
                  changeName={this.changeNameHandler}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p>Press the button to Show/Hide persons!</p>
          </div>
        )}
        {cars}
        <Computer />
      </div>
    );
  }
}

export default App;
