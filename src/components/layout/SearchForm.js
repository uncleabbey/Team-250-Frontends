/* eslint-disable sort-imports */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../actions/product';


const SearchForm = () => {
  const [inputs, setInputs] = useState('');
  const page = useSelector((state) => state.product.page);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputs(event.target.value);
    if (inputs.length > 2) {
      dispatch(searchProducts(page, inputs));
    }
  };


  return (
    <form onSubmit={(event) => event.preventDefault()} className="form-inline active-cyan-4 my-2 my-lg-0 search-form">
      <i className="fas fa-search" aria-hidden="true"></i>
      <input
      className="form-control
      form-control mr-sm-2"
      type="text" placeholder="Search"
      aria-label="Search"
      value={inputs}
      onChange={handleChange}
      autoComplete="on"
      />
    </form>
  );
};

export default SearchForm;
