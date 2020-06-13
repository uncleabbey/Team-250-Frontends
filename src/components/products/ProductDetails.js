/* eslint-disable no-magic-numbers */
/* eslint-disable multiline-ternary */
/* eslint-disable no-ternary */
/* eslint-disable react/prop-types */
import './productDetails.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../actions/order';
import { getProductById } from '../../actions/product';
// eslint-disable-next-line sort-imports
import Loader from '../layout/Loader';


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
  name, description, price, quantity, setQuantity, onClick
}) => (
  <div className="details col-md-6">
    <h4 className="product-title">{name}</h4>
    <h6 className="price">
      current price: <span>₦{price}</span>
    </h6>
    <p className="product-description">
      { description }
    </p>
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
    <div className="action">
      <button onClick={onClick} className="add-to-cart btn btn-default" type="button">
        add to cart
      </button>
    </div>
    </div>
  </div>
);

const ProductDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getProductById(id));
  }, []);
  const handleCart = () => {
    const data = { produceId: product, quantity };
    dispatch(addToCart(data));
  };
  return (
    <>
      {
        loading ? <Loader /> : (
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
              onClick={handleCart}
              />
            </div>
          </div>
        </div>
      </div>
        )
      }
    </>
  );
};

export default ProductDetails;
