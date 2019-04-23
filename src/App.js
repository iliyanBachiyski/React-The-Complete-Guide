import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "./components/AuthForm/AuthForm";
import AuthContext from "./context/auth-context";
import Footer from "./components/Footer/Footer";
import personMapDispatchToProps from "./store/actions/personActions/mapDispatchToProps";
import authMapDispatchToProps from "./store/actions/authActions/mapDispatchToProps";
import WithClass from "./components/hoc/WithClass";
import { autoSignIn } from "./store/actions/actions";
import appModuleStyles from "./App.module.css";

const Persons = React.lazy(() => import("./components/Persons/Persons"));
const Cars = React.lazy(() => import("./components/Cars/Cars"));
const Header = React.lazy(() => import("./components/Header/Header"));
const Computer = React.lazy(() => import("./components/Computer/Computer"));
const Posts = React.lazy(() => import("./components/Posts/Posts"));
const Orders = React.lazy(() => import("./components/Orders/Orders"));
const ErrorBoundary = React.lazy(() =>
  import("./components/ErrorBoundary/ErrorBoundary")
);

class App extends Component {
  state = {
    showCars: false,
    title: "Hello from App Component!",
    cars: [
      { id: "carUniqueKey1", color: "Red", hp: 240 },
      { id: "carUniqueKey2", color: "Grey", hp: 101 },
      { id: "carUniqueKey3", color: "Blue", hp: 150 }
    ]
  };

  componentDidMount() {
    this.props.autoSignIn();
  }

  toogleCarsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showCars: !prevState.showCars
      };
    });
  };
  render() {
    let router = (
      <React.Fragment>
        <AuthContext.Provider
          value={{ isAuthenticated: this.props.isAuthenticated }}
        >
          <Header
            title={this.state.title}
            tooglePersonHandler={this.props.onTooglePersons}
            toogleCarsHandler={this.toogleCarsHandler}
            personsLength={this.props.persons.length}
            showCars={this.state.showCars}
            logout={this.props.logOutRequest}
            {...this.props}
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
                increaseAge={this.props.onIncreasePersonAge}
                changeName={this.props.onChangeName}
                deletePerson={this.props.onDeletePerson}
              />
            )}
          />
          <Route
            path="/cars"
            render={props => (
              <AuthContext.Provider
                value={{
                  isAuthenticated: this.props.isAuthenticated
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
          <Route path="/orders" render={props => <Orders {...props} />} />
          <Route render={() => <div>Page Not Found!</div>} />
        </Switch>
      </React.Fragment>
    );
    if (!this.props.isAuthenticated) {
      router = <AuthForm />;
    }
    return (
      <WithClass classes={appModuleStyles.App}>
        <Suspense fallback={<div>Loading...</div>}>{router}</Suspense>
        <Footer />
      </WithClass>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.personRed.persons,
    showPersons: state.personRed.showPersons,
    isAuthenticated: state.authRed.isUserAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...personMapDispatchToProps(dispatch),
    ...authMapDispatchToProps(dispatch),
    autoSignIn: () => dispatch(autoSignIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
