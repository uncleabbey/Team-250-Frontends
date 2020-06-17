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
import RenderProduct from './products/RenderProduct';


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
        <Pagination postsPerPage={pageSize} totalPosts={count} paginate={paginate} />
        <div>
          {loading && <Loader />}
          {!loading && products.length === 0 ? <h3 className="text-center">Sorry Search Keyword not in the Database</h3> : ''}
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
