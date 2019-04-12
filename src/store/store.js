import { createStore } from "redux";
import personReducer from "./reducers/personReducer";

const store = createStore(personReducer);

export default store;
