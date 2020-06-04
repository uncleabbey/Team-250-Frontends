import React, { useState } from 'react';

const Cart = () => {
  const [cart] = useState([]);
  return (
    <div className="cart-container">
    <img
    src="https://res.cloudinary.com/kayode/image/upload/v1591273406/shopping-cart_xztvok.svg"
        alt="Shopping_Cart" className="cart-img" />
    <span className="cart-number">
      {cart.length}
    </span>
  </div>
  );
};

export default Cart;
