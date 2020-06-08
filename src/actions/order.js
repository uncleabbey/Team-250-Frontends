import axios from 'axios';
// eslint-disable-next-line sort-imports
import { ADD_TO_CART, ORDER_PRODUCT, REMOVE_FROM_CART } from './types';
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
