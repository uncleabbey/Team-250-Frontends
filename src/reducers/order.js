/* eslint-disable max-lines-per-function */
import {
  ADD_TO_CART,
  LOGOUT_SUCCESS,
  REMOVE_FROM_CART
} from '../actions/types';


const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const add = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(add));
      return {
        ...state,
        cart: add
      };
    }
    case REMOVE_FROM_CART: {
      const remove = state.cart.filter((item, index) => index !== action.payload);
      localStorage.setItem('cart', JSON.stringify(remove));
      return {
        ...state,
        cart: remove
      };
    }
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};
