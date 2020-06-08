import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';
import { getUserOrder } from '../../actions/order';

const UserOrders = () => {
  const orders = useSelector((state) => state.order.userOrders);
  const loading = useSelector((state) => state.order.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrder());
  }, []);
  return (
    <div>
        <h1 className="text-success">Your Orders</h1>
        {loading && <Loader /> }
        <div className="container">
          {
            orders ? orders.map((item) => (
              <div className="card col-5 mr-auto ml-auto mt-4 mb-4" key={item.id}>
                <ul className="list-group">
                  {
                    item.items_ordered.map((order, index) => (
                      <li className="list-group-primary" key={index}>
                        {order.produce.name}
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
