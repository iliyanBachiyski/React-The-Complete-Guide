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
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";

class App extends Component {
  state = {
    showCars: false,
    title: "Hello from App Component!",
    cars: [
      { id: "carUniqueKey1", color: "Red", hp: 240 },
      { id: "carUniqueKey2", color: "Grey", hp: 101 },
      { id: "carUniqueKey3", color: "Blue", hp: 150 }
    ],
    isAuthenticated: false
  };

  getPersonIndexByName = name => {
    const personIndex = this.props.persons.findIndex(person => {
      return person.name === name;
    });
    return personIndex;
  };

  increasePersonAge = personName => {
    const personIndex = this.getPersonIndexByName(personName);
    if (personIndex > -1) {
      const person = { ...this.props.persons[personIndex] };
      person.age++;
      const persons = [...this.props.persons];
      persons[personIndex] = person;
      this.setState({ persons });
    }
  };

  changeNameHandler = (event, name) => {
    const personIndex = this.getPersonIndexByName(name);
    if (personIndex > -1) {
      const person = { ...this.props.persons[personIndex] };
      person.name = event.target.value;
      const personsArray = [...this.props.persons];
      personsArray[personIndex] = person;
      this.setState({ persons: personsArray });
    }
  };

  toogleCarsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showCars: !prevState.showCars
      };
    });
  };

  deletePerson = index => {
    const persons = [...this.props.persons];
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
              tooglePersonHandler={this.props.onTooglePersons}
              toogleCarsHandler={this.toogleCarsHandler}
              personsLength={this.props.persons.length}
              showCars={this.state.showCars}
            />
          </AuthContext.Provider>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Persons
                  showPersons={this.props.showPersons}
                  persons={this.props.persons}
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
            <Route path="/posts" render={props => <Posts {...props} />} />
            <Route render={() => <div>Page Not Found!</div>} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </WithClass>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons,
    showPersons: state.showPersons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTooglePersons: () => dispatch({ type: "TOOGLE_PERSONS" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
