/* eslint-disable sort-imports */
/* eslint-disable import/named */
import axios from 'axios';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PAGE_NO,
  GET_PRODUCT_ID,
  GET_PRODUCTS,
  LOADING
} from './types';
import { returnErrors, createMessage } from './messages';
import tokenConfig from './helper';


export const getProducts = (currentPage) => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const url = `http://localhost:8000/api/products?page=${currentPage}`;
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      payload: res.data.products,
      type: GET_PRODUCTS
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response.data, error.response.status));
  });
};

export const setCurrentPage = (page) => (dispatch) => {
  dispatch({
    payload: page,
    type: GET_PAGE_NO
  });
};

export const getProductById = (id) => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  axios.get(`http://localhost:8000/api/products/${id}`, tokenConfig(getState)).then((res) => {
    dispatch({
      payload: res.data.product,
      type: GET_PRODUCT_ID
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response.data, error.response.status));
  });
};

export const addProduct = (product) => (dispatch, getState) => {
  axios.post('http://localhost:8000/api/product/add', product, tokenConfig(getState)).then((res) => {
    dispatch(createMessage({ addProduct: 'Product Added' }));
    dispatch({
      payload: res.data.product,
      type: ADD_PRODUCT
    });
  }).catch((error) => {
    dispatch(createMessage({ addBookError: 'Error Adding Book' }));
    dispatch(returnErrors(error.response.data, error.response.status));
  });
};

export const deleteProduct = (id) => (dispatch, getState) => {
  axios.delete(`http://localhost:8000/api/products/details/${id}`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteLead: 'Product Deleted' }));
    dispatch({
      payload: id,
      type: DELETE_PRODUCT
    });
  }).catch((error) => {
    dispatch(createMessage({ addBookError: 'Error Adding Book' }));
    dispatch(returnErrors(error.response.data, error.response.status));
  });
};

// Edit Lead
export const editProduct = (id, product) => (dispatch, getState) => {
  axios.patch(`http://localhost:8000/api/products/details/${id}/`, product, tokenConfig(getState)).then((res) => {
    dispatch(createMessage({ editLead: 'Lead updated' }));
    dispatch({
      payload: res.data,
      type: EDIT_PRODUCT
    });
  }).catch((error) => dispatch(returnErrors(error.response.data, error.response.status)));
};
