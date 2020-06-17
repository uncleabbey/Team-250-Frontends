import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const Thanks = () => {
  const orderDetails = useSelector((state) => state.order.orderDetails);
  return (
  <div className="jumbotron text-center cart-item">
    <h1 className="display-3 text-success">Thank You for the order!</h1>
    <h3>Order Details</h3>
    <ul className="list-group m-auto col-4">
      {
        orderDetails.items_ordered ? orderDetails.items_ordered.map((item, index) => (
          <li key={index} className="list-group-item">
              <div>
                <h5> {item.produce.name} </h5>
                <p>Price {item.produce.price} </p>
                <p>Quantity {item.quantity} </p>
              </div>
          </li>
        )) : <h3>The Greatest Harm can come from best Intention</h3>
      }
    </ul>
    <hr />
    <p>
      Having trouble? <NavLink to="/contact">Contact us</NavLink>
    </p>
    <p className="lead">
      <NavLink to="/home">
        <button className="btn btn-success btn-sm">
          Continue to Shopping
        </button>
      </NavLink>
    </p>
</div>);
};

export default Thanks;
