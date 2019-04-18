import React from "react";

const order = props => {
  const { order } = props;
  return (
    <div className="card">
      <h3>Customer Name</h3>
      <p>{order.customer.name}</p>
      <h3>Customer Email</h3>
      <p>{order.customer.email}</p>
      <h3>Delivery Method</h3>
      <p>{order.deliveryMethod}</p>
      <h3>Price</h3>
      <p>{order.totalPrice.toFixed(2)}$</p>
    </div>
  );
};

export default order;
