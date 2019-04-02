import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import classes from "./Navigation.module.css";

const navigation = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(navigation);
