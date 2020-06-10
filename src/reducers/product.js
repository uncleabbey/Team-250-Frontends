/* eslint-disable import/named */
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PAGE_NO,
  GET_PRODUCTS,
  GET_PRODUCT_ID,
  LOADING,
  SEARCH_PRODUCT
} from '../actions/types';


const initialState = {
  addedProduct: [],
  count: 0,
  loading: true,
  page: 1,
  pageSize: 20,
  product: {},
  products: []
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        count: action.payload.count,
        loading: false,
        products: action.payload.results
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        count: action.payload.count,
        loading: false,
        products: action.payload.results
      };
    case GET_PAGE_NO:
      return {
        ...state,
        page: action.payload
      };
    case GET_PRODUCT_ID:
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case ADD_PRODUCT:
    case EDIT_PRODUCT:
      return {
        ...state,
        addedProduct: [...state.addedProduct, action.payload],
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        leads: state.products.filter((product) => product.id !== action.payload)
      };
    default:
      return state;
  }
};
