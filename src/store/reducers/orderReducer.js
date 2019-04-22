import * as actionTypes from "../actions/actionConst";

const initialState = {
  orders: null,
  error: null
};

const orderReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actionTypes.GET_ORDERS_ACTION: {
      const orders = [];
      for (let key in action.payload.orders) {
        orders.push({ key, ...action.payload.orders[key] });
      }
      newState = {
        ...state,
        orders
      };
      break;
    }
    case actionTypes.GET_ORDERS_FAILED_ACTION: {
      newState = {
        ...state,
        error: action.payload.error
      };
      break;
    }
    default:
      newState = { ...state };
  }
  return newState;
};

export default orderReducer;
