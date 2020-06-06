/* eslint-disable no-magic-numbers */
/* eslint-disable multiline-ternary */
/* eslint-disable no-ternary */
/* eslint-disable react/prop-types */
import './productDetails.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductById } from '../../actions/product';


const Image = ({ src, name }) => (
<div className="tab-pane active" id="pic-1">
    <img className="product-img" src={src} alt={`${name}.image.jpg`} />
</div>
);

const Images = ({ src, name }) => (
  <div className="preview-pic tab-content">
    <Image src={src} name={name} />
  </div>
);


const Details = ({
  name, description, price, quantity, setQuantity
}) => (
  <div className="details col-md-6">
    <h3 className="product-title">{name}</h3>
    <div className="rating">
      <div className="stars">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
      <span className="review-no">41 reviews</span>
    </div>
    <p className="product-description">
      { description }
    </p>
    <h4 className="price">
      current price: <span>₦{price}</span>
    </h4>
    <p className="vote">
      <strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong>
    </p>
    <div className="colors">
      <h5>Quantity</h5>
      <div className="quantity">
        <p>{quantity}</p>
    <button type="button" onClick={() => setQuantity(quantity - 1)} className="btn-danger mr-2" >
          -
    </button>
        Quantity
    <button type="button" onClick={() => setQuantity(quantity + 1)} className="btn-danger">
        +
    </button>
    </div>
    </div>
    <div className="action">
      <button className="add-to-cart btn btn-default" type="button">
        add to cart
      </button>
    </div>
  </div>
);

const ProductDetails = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getProductById(id));
  }, []);
  return (
    <div className="container prod-det">

      <div className="card">
        <NavLink to="/home">
          <button type="button" className="btn btn-primary">Go Back to List Product</button>
        </NavLink>
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
            <Images src={product.product_img} name={product.name} />
            </div>
            <Details
            quantity={quantity}
            setQuantity={setQuantity}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
