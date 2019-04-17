import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import personReducer from "./reducers/personReducer";
import computerReducer from "./reducers/computerReducer";
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  personRed: personReducer,
  compRed: computerReducer,
  postRed: postsReducer,
  authRed: authReducer
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
