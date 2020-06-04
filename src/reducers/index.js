import { combineReducers } from 'redux';
// eslint-disable-next-line sort-imports
import auth from './auth';
import errors from './errors';
import messages from './messages';


export default combineReducers({
  auth,
  errors,
  messages
});
