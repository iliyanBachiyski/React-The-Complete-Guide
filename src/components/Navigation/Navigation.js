import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/actions/authActions/mapDispatchToProps";
import { NavLink, withRouter } from "react-router-dom";
import classes from "./Navigation.module.css";

const navigation = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.Active} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Active} to="/cars">
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Active} to="/computer">
              Computer
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Active} to="/posts">
              Posts
            </NavLink>
          </li>
          <li className={classes.LogOut}>
            <button onClick={props.logOutRequest}>Log Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(navigation));
