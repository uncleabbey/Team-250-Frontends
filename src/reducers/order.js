/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import {
  ADD_TO_CART,
  DAILY_SALES,
  LOADING,
  LOGOUT_SUCCESS,
  ORDER_PRODUCT,
  REMOVE_FROM_CART,
  SALES_REPORT,
  USER_ORDERS
} from '../actions/types';


const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  itemOrdered: [],
  key: 'FLWPUBK_TEST-2432438e00d15b36d449ca3f1ef8b050-X',
  loading: true,
  orderDetails: JSON.parse(localStorage.getItem('order')) || {},
  sales: 0,
  seckey: 'FLWSECK_TEST-471857a280dfcd960f66aec3aa0e3d42-X',
  userOrders: []
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
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
    case LOGOUT_SUCCESS:
      localStorage.removeItem('cart');
      localStorage.removeItem('order');
      return {
        ...state,
        cart: [],
        orderDetails: {}
      };
    case ORDER_PRODUCT: {
      localStorage.removeItem('cart');
      const order = action.payload;
      localStorage.setItem('order', JSON.stringify(order));
      return {
        ...state,
        cart: [],
        orderDetails: order
      };
    }
    case USER_ORDERS: {
      return {
        ...state,
        loading: false,
        userOrders: action.payload.orders
      };
    }
    case DAILY_SALES: {
      return {
        ...state,
        itemOrdered: action.payload.itemOrdered,
        loading: false,
        sales: action.payload.totalSales
      };
    }
    case SALES_REPORT: {
      return {
        ...state,
        itemOrdered: action.payload.itemOrdered,
        loading: false,
        sales: action.payload.totalSales
      };
    }
    default:
      return state;
  }
};
