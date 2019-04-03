import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Persons from "./components/Persons/Persons";
import Cars from "./components/Cars/Cars";
import Header from "./components/Header/Header";
import Computer from "./components/Computer/Computer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import WithClass from "./components/hoc/WithClass";
import AuthContext from "./context/auth-context";
import appModuleStyles from "./App.module.css";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/Posts/FullPost/FullPost";
import Footer from "./components/Footer/Footer";

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
    ],
    isAuthenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons
      };
    });
  };

  toogleCarsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showCars: !prevState.showCars
      };
    });
  };

  deletePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  login = () => {
    this.setState((prevState, props) => {
      return {
        isAuthenticated: !prevState.isAuthenticated
      };
    });
  };

  render() {
    return (
      <WithClass classes={appModuleStyles.App}>
        <BrowserRouter>
          <AuthContext.Provider value={{ login: this.login }}>
            <Header
              title={this.state.title}
              tooglePersonHandler={this.tooglePersonHandler}
              toogleCarsHandler={this.toogleCarsHandler}
              personsLength={this.state.persons.length}
              showCars={this.state.showCars}
            />
          </AuthContext.Provider>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Persons
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  increaseAge={this.increasePersonAge}
                  changeName={this.changeNameHandler}
                  deletePerson={this.deletePerson}
                />
              )}
            />
            <Route
              path="/cars"
              render={props => (
                <AuthContext.Provider
                  value={{
                    isAuthenticated: this.state.isAuthenticated
                  }}
                >
                  <Cars
                    {...props}
                    showCars={this.state.showCars}
                    cars={this.state.cars}
                  />
                </AuthContext.Provider>
              )}
            />
            <Route
              path="/computer"
              render={() => (
                <ErrorBoundary>
                  <Computer />
                </ErrorBoundary>
              )}
            />
            <Route path="/posts" exact render={props => <Posts {...props} />} />
            <Route
              path="/posts/:id"
              render={props => <FullPost {...props} />}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </WithClass>
    );
  }
}

export default App;
