import React from "react";
import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a className={classes.Active} href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navigation;
