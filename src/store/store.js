import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import personReducer from "./reducers/personReducer";
import computerReducer from "./reducers/computerReducer";

const rootReducer = combineReducers({
  personRed: personReducer,
  compRed: computerReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching ", action);
      next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
