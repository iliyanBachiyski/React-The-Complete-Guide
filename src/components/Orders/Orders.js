import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import Order from "./Order/Order";
import mapDispatchToProps from "../../store/actions/ordersActions/mapDispatchToProps";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  }
  render() {
    let orders = <Spinner />;
    let error = null;
    if (this.props.error) {
      error = <p>{this.props.error.toString()}</p>;
      orders = [];
    }
    if (this.props.orders) {
      if (this.props.orders.length > 0) {
        orders = this.props.orders.map(order => {
          return <Order key={order.key} order={order} />;
        });
      } else {
        orders = <p>Still Don't Have Orders!</p>;
      }
    }
    return (
      <div className="card">
        {orders}
        {error}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderRed.orders,
    error: state.orderRed.error,
    token: state.authRed.authToken,
    userId: state.authRed.userId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
