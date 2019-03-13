import React, { Component } from "react";
import Person from "./Person/Person";
import Car from "./Car/Car";
import Computer from "./Computer/Computer";
import "./App.css";

class App extends Component {
  state = {
    title: "Hello from App Component!",
    persons: [{ name: "Iliyan", age: 24 }, { name: "Veronika", age: 23 }],
    cars: [{ color: "Red", hp: 240 }, { color: "Grey", hp: 101 }]
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

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitleHandler}>Change Title</button>
        <hr />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          increaseAge={this.increasePersonAge}
          changeName={this.changeNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          increaseAge={this.increasePersonAge}
          changeName={this.changeNameHandler}
        />
        <Car color={this.state.cars[0].color} hp={this.state.cars[0].hp}>
          Model: Ferari
        </Car>
        <Car color={this.state.cars[1].color} hp={this.state.cars[1].hp} />
        <Computer />
      </div>
    );
  }
}

export default App;
