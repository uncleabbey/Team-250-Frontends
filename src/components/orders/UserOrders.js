import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';
import { getUserOrder } from '../../actions/order';
// eslint-disable-next-line sort-imports
import './userOrder.css';

const convertDate = (string) => {
  const date = new Date(string);
  return date.toLocaleString();
};
const getStatus = (string) => {
  switch (string) {
    case 'P':
      return 'Processing';
    case 'T':
      return 'In-Transit';
    case 'C':
      return 'Cancelled';
    case 'D':
      return 'Delivered';
    default:
      return '';
  }
};
const UserOrders = () => {
  const orders = useSelector((state) => state.order.userOrders);
  const loading = useSelector((state) => state.order.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrder());
  }, []);
  return (
    <div className="cart-item">
        <h1 className="text-success">Your Orders</h1>
        {loading && <Loader /> }
        <div className="">
          {
            orders ? orders.map((item) => (
              <div className="order-card" key={item.id}>
                  <div className="order-card-header">
                    <p>Order Date: {convertDate(item.dateAndTimeOfOrder)} </p>
                    <small className={getStatus(item.order_status)}>
                      {getStatus(item.order_status)}
                    </small>
                  </div>
                <div>
                  <p className="bold-font">Total {item.amount_paid}</p>
                </div>
                <ul className="order-card-list">
                  {
                    item.items_ordered.map((order, index) => (
                      <li className="m-1" key={index}>
                        <p className="bold-font">
                          {order.produce.name}
                        </p>
                        <img src= {order.produce.product_img} alt= {order.produce.name} className="order-card-img" />
                      </li>
                    ))
                  }
                </ul>
              </div>
            )) : <h2>You have No orders</h2>
          }
        </div>
    </div>
  );
};

export default UserOrders;
