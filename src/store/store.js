import { createStore, combineReducers } from "redux";
import personReducer from "./reducers/personReducer";
import computerReducer from "./reducers/computerReducer";

const rootReducer = combineReducers({
  personRed: personReducer,
  compRed: computerReducer
});
const store = createStore(rootReducer);

export default store;
