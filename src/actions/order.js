import { ADD_TO_CART, REMOVE_FROM_CART } from './types';
import { createMessage } from './messages';

export const addToCart = (data) => (dispatch) => {
  dispatch(createMessage({ addCart: 'Product Added to cart' }));
  dispatch({
    payload: data,
    type: ADD_TO_CART
  });
};

export const removeCart = (data) => (dispatch) => {
  dispatch(createMessage({ removeCart: 'Product from Cart' }));
  dispatch({
    payload: data,
    type: REMOVE_FROM_CART
  });
};
