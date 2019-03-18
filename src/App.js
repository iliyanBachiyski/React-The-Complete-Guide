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
      { id: "personUniqueKey1", name: "Iliyan", age: 24 },
      { id: "personUniqueKey2", name: "Veronika", age: 23 },
      { id: "personUniqueKey3", name: "Ivelin", age: 22 }
    ],
    cars: [
      { id: "carUniqueKey1", color: "Red", hp: 240 },
      { id: "carUniqueKey2", color: "Grey", hp: 101 },
      { id: "carUniqueKey3", color: "Blue", hp: 150 }
    ]
  };

  getPersonIndexByName = name => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.name === name;
    });
    return personIndex;
  };

  increasePersonAge = personName => {
    const personIndex = this.getPersonIndexByName(personName);
    if (personIndex > -1) {
      const person = { ...this.state.persons[personIndex] };
      person.age++;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({ persons });
    }
  };

  changeNameHandler = (event, name) => {
    const personIndex = this.getPersonIndexByName(name);
    if (personIndex > -1) {
      const person = { ...this.state.persons[personIndex] };
      person.name = event.target.value;
      const personsArray = [...this.state.persons];
      personsArray[personIndex] = person;
      this.setState({ persons: personsArray });
    }
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

  deletePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white"
    };
    const classes = ["button"];
    if (this.state.persons.length <= 1) {
      classes.push("red", "red-bold");
    }
    if (this.state.persons.length === 2) {
      classes.push("yellow", "yellow-bold");
    }
    if (this.state.persons.length >= 3) {
      classes.push("green", "green-bold");
    }
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          {this.state.cars.map(car => {
            return <Car color={car.color} hp={car.hp} key={car.id} />;
          })}
        </div>
      );
      style.backgroundColor = "red";
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
        <button
          className={classes.join(" ")}
          onClick={this.tooglePersonHandler}
        >
          Show/Hide Persons
        </button>
        <button style={style} onClick={this.toogleCarsHandler}>
          Show/Hide Cars
        </button>
        <hr />
        {this.state.showPersons ? (
          <div>
            {this.state.persons.map((person, idx) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  increaseAge={() => this.increasePersonAge(person.name)}
                  changeName={event =>
                    this.changeNameHandler(event, person.name)
                  }
                  deletePerson={() => this.deletePerson(idx)}
                  key={person.id}
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
