/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';

const RenderProduct = ({ products }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={products.product_img} />
    </div>
    <div className="product-info">
      <Link to={`/products/${products.id}`}>
        <h5 id="h5">{products.name}</h5>
      </Link>
      <h6> ₦{products.price} </h6>
    </div>
  </div>
);

export default RenderProduct;
