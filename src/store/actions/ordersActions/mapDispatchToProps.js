import { fetchOrdersAsync } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: token => dispatch(fetchOrdersAsync(token))
  };
};

export default mapDispatchToProps;
