/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
/* eslint-disable sort-imports */
/* eslint-disable import/named */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rave, { VerifyTransaction } from 'react-flutterwave-rave';
import { Redirect } from 'react-router-dom';
import { total, orderedItems } from '../layout/Helper';
import { orderProduct } from '../../actions/order';

const Checkout = () => {
  const cart = useSelector((state) => state.order.cart);
  const key = useSelector((state) => state.order.key);
  const seckey = useSelector((state) => state.order.seckey);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const callback = (response) => VerifyTransaction({
    // eslint-disable-next-line sort-keys
    live: false, txref: response.tx.txRef, SECKEY: seckey
  })
    .then((resp) => {
      console.log(resp);
      const data = {
        amountPaid: total(cart),
        items: orderedItems(cart)
      };
      dispatch(orderProduct(data));
      return <Redirect to="/thanks" />;
    })
    .catch((error) => {
      console.log(error);
    });

  const close = () => {
    console.log('Payment closed');
    return <Redirect to="/cart" />;
  };
  return (
      <div className="text-center cart-item">
        <h2>Payment Page</h2>
        <h4> Total Amount of Orders: ₦{cart ? total(cart) : ' '}</h4>
        <p>For the folllowing produce</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.produceId ? <div>
              <h6>{item.produceId.name}</h6>
              <p>Quantity: {item.quantity}</p>
              </div> : '' }
            </li>
          ))}
        </ul>
        <Rave
          pay_button_text="Pay With Rave"
          class="btn btn-outline-success"
          custom_title="Zerohunger"
          custom_description={`Payment for some produces ${cart.join()}`}
          customer_email={user ? user.email : ''}
          customer_phone={user ? user.phone_number : ''}
          amount={String(total(cart))}
          ravePubKey={key}
          callback={callback}
          onclose={close}
          redirect_url="/thanks"
        />
    </div>
  );
};
export default Checkout;
