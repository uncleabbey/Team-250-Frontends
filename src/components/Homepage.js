/* eslint-disable no-negated-condition */
/* eslint-disable no-ternary */
/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setCurrentPage } from '../actions/product';
// import PropTypes from 'prop-type';
import Pagination from './products/Pagination';
import Loader from './layout/Loader';

const RenderProduct = ({ products }) => (
  <div className="product-card" key={products.id}>
    <div className="product-image">
      <img src={products.src} />
    </div>
    <div className="product-info">
      <h5 id="h5">{products.name}</h5> <h6> {products.amount} </h6>
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
