/* eslint-disable sort-imports */
/* eslint-disable multiline-ternary */
/* eslint-disable no-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCart } from '../../actions/order';
import { total } from '../layout/Helper';

const TableBody = ({ cart }) => cart.map((item, index) => {
  const dispactch = useDispatch();
  const handleClick = (id) => dispactch(removeCart(id));
  return (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.produceId ? <p>{item.produceId.name}</p> : ''}</td>
    <td>{item.produceId ? <p>₦{item.produceId.price}</p> : ''}</td>
    <td><p>{item.quantity}</p></td>
    <td><p>{item.produceId ? item.produceId.price * item.quantity : ''}</p></td>
    <td><button onClick={() => handleClick(index)} className="btn btn-danger">X</button></td>
  </tr>
  );
});


const CartItems = () => {
  const cart = useSelector((state) => state.order.cart);
  return (
    <div className="container text-center cart-item">
      <h3>Cart Items</h3>
      {
      cart.length > 0 ? (
      <div>
      <h5>Total Amount of Selected Produce: ₦{cart ? total(cart) : ' '}</h5>
      <p>The Breakdown is as follow</p>
      <table className="table table-success">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
        <TableBody cart={cart} />
        </tbody>
      </table>
      <NavLink to="/checkout">
        <button type="button" className="btn btn-outline-success">
          Checkout
          </button>
      </NavLink>
      </div>
      ) : <h5>No Produce has been selected yet</h5>
      }
    </div>
  );
};

export default CartItems;
