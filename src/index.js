import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.authorization = "SOME TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * We have to pass requestConf/response/error down,
 * to be sure that the components which are using axios will receive the information
 */
axios.interceptors.request.use(
  requestConf => {
    // console.log("Request configuration from Interceptor: ", requestConf);
    return requestConf;
  },
  error => {
    // console.log("Request error from Interceptor: ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log("Response from Interceptor: ", response);
    return response;
  },
  error => {
    // console.log("Response error from Interceptor: ", error);
    Promise.reject(error);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
