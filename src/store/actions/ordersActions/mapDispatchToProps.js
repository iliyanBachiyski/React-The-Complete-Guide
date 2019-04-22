import { fetchOrdersAsync } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(fetchOrdersAsync(token, userId))
  };
};

export default mapDispatchToProps;
