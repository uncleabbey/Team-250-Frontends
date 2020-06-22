import axios from 'axios';
// eslint-disable-next-line sort-imports
import {
  AUTH_ERROR,
  CHANGE_PASSWORD,
  CONTACT_US,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_PASSWORD,
  USER_LOADED,
  USER_LOADING
} from './types';
import { createMessage, returnErrors } from './messages';
import tokenConfig from './helper';


// REGISTER FARMER
export const farmerRegister = ({
  password, email, location, phoneNumber, businessName
}) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify({
    business_name: businessName,
    email,
    location,
    password,
    phone_number: phoneNumber
  });
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/auth/signup/farmer', body, config)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: REGISTER_SUCCESS
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// REGISTER CUSTOMER
export const customerRegister = ({
  password, email, location, phoneNumber, firstName, lastName
}) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify({
    email,
    first_name: firstName,
    last_name: lastName,
    location,
    password,
    phone_number: phoneNumber
  });
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/auth/signup/customer', body, config)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: REGISTER_SUCCESS
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
// LOGIN

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify({ email, password });
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: LOGIN_SUCCESS
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// LOGOUT
export const logout = () => (dispatch, getState) => {
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/auth/logout', null, tokenConfig(getState))
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
    });
};


export const loadUser = () => (dispatch, getState) => {
  // set user loading
  dispatch({
    type: USER_LOADING
  });

  axios
    .get('https://zerohunger-backend.herokuapp.com/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        payload: res.data,
        type: USER_LOADED
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const contact = (data) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify(data);
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/contact', body, config)
    .then((res) => {
      dispatch(createMessage({ contactUs: 'Success' }));
      dispatch({
        payload: res.data,
        type: CONTACT_US
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
    });
};

export const resetPassword = (data) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify(data);
  axios
    .post('https://zerohunger-backend.herokuapp.com/api/auth/password/reset', body, config)
    .then((res) => {
      dispatch(createMessage({ resetPassword: 'Success check your mail for instruction' }));
      dispatch({
        payload: res.data,
        type: RESET_PASSWORD
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
    });
};

export const changePassword = ({ password, token }) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const data = { password };
  const body = JSON.stringify(data);
  axios
    .put(`https://zerohunger-backend.herokuapp.com/api/auth/password/change/${token}`, body, config)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: CHANGE_PASSWORD
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
    });
};
