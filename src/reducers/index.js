import { combineReducers } from 'redux';
// eslint-disable-next-line sort-imports
import auth from './auth';
import errors from './errors';
import messages from './messages';
import order from './order';
import product from './product';


export default combineReducers({
  auth,
  errors,
  messages,
  order,
  product
});
