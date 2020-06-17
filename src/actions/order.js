import axios from 'axios';
// eslint-disable-next-line sort-imports
import {
  ADD_TO_CART,
  DAILY_SALES,
  LOADING,
  ORDER_PRODUCT,
  REMOVE_FROM_CART,
  SALES_REPORT,
  USER_ORDERS
} from './types';
import { createMessage, returnErrors } from './messages';
import tokenConfig from './helper';

export const addToCart = (data) => (dispatch) => {
  dispatch(createMessage({ addCart: 'Product Added to cart' }));
  dispatch({
    payload: data,
    type: ADD_TO_CART
  });
};

export const removeCart = (data) => (dispatch) => {
  dispatch(createMessage({ removeCart: 'Product Removed from Cart' }));
  dispatch({
    payload: data,
    type: REMOVE_FROM_CART
  });
};

export const orderProduct = (data) => (dispatch, getState) => {
  const url = 'https://zerohunger-backend.herokuapp.com/api/orders';
  axios.post(url, data, tokenConfig(getState)).then((res) => {
    dispatch(createMessage({ orderProduct: 'Success' }));
    dispatch({
      payload: res.data.order,
      type: ORDER_PRODUCT
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response.data, error.response.status));
  });
};


export const getUserOrder = () => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const url = 'https://zerohunger-backend.herokuapp.com/api/orders/user';
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      payload: res.data,
      type: USER_ORDERS
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response, error.response.status));
  });
};

export const getDailySales = () => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const url = 'https://zerohunger-backend.herokuapp.com/api/sales/daily';
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      payload: res.data,
      type: DAILY_SALES
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response, error.response.status));
  });
};

export const getSalesReport = (days) => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const url = `https://zerohunger-backend.herokuapp.com/api/sales/${days}`;
  axios.get(url, tokenConfig(getState)).then((res) => {
    dispatch({
      payload: res.data,
      type: SALES_REPORT
    });
  }).catch((error) => {
    dispatch(returnErrors(error.response, error.response.status));
  });
};
