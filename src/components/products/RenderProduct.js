/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';

const RenderProduct = ({ products }) => (
  <div className="product-card">

  <Link to={`/products/${products.id}`}>
    <div className="product-image">
      <img src={products.product_img} />
    </div>
    <div className="product-info">
        <h5 id="h5">{products.name}</h5>
      <h6> ₦{products.price} </h6>
    </div>
  </Link>
  </div>
);

export default RenderProduct;
