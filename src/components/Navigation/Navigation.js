import React from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./Navigation.module.css";

const navigation = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              className={
                props.location.pathname === "/" ? classes.Active : null
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                props.location.pathname === "/cars" ? classes.Active : null
              }
              to="/cars"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              className={
                props.location.pathname === "/computer" ? classes.Active : null
              }
              to="/computer"
            >
              Computer
            </Link>
          </li>
          <li>
            <Link
              className={
                props.location.pathname === "/posts" ? classes.Active : null
              }
              to="/posts"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(navigation);
