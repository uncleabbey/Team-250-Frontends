/* eslint-disable no-negated-condition */
/* eslint-disable no-ternary */
/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, setCurrentPage } from '../actions/product';
// import PropTypes from 'prop-type';
import Pagination from './products/Pagination';
import Loader from './layout/Loader';

const RenderProduct = ({ products }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={products.product_img} />
    </div>
    <div className="product-info">
      <Link to={`/product/${products.id}`}>
        <h5 id="h5">{products.name}</h5>
      </Link>
      <h6> ₦{products.price} </h6>
    </div>
  </div>
);

const Homepage = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const count = useSelector((state) => state.product.count);
  const pageSize = useSelector((state) => state.product.pageSize);
  const page = useSelector((state) => state.product.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(page));
  }, [getProducts, page]);
  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));
  const ourProduct = products.map((good) => <RenderProduct key={good.id} products={good} />);
  return (
    <div id="body">
      <nav className="product-filter">
        <h1 id="h1"> Available Produce </h1>
      </nav>
      <section>
        <div>
          {loading && <Loader />}
          <div className="products">
            {!products ? <p className="text-danger">No Product yet</p> : ourProduct}
          </div>
        </div>
      </section>
      <Pagination postsPerPage={pageSize} totalPosts={count} paginate={paginate} />
    </div>
  );
};

export default Homepage;
