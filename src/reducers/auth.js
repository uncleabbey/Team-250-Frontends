/* eslint-disable max-lines-per-function */
import {
  ADD_TO_CART,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_FROM_CART,
  USER_LOADED,
  USER_LOADING
} from '../actions/types';


const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  isAuthenticated: null,
  isFarmer: null,
  isLoading: false,
  token: localStorage.getItem('token'),
  user: null
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isFarmer: action.payload.isFarmer,
        isLoading: false,
        user: action.payload
      };
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isFarmer: action.payload.isFarmer,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        cart: [],
        isAuthenticated: false,
        isFarmer: false,
        isLoading: false,
        token: null,
        user: null
      };
    default:
      return state;
  }
};
