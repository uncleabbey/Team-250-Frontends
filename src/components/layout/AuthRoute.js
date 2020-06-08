/* eslint-disable react/prop-types */
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, auth, ...rest }) => {
  // eslint-disable-next-line no-param-reassign
  auth = useSelector((state) => state.auth);
  return (
    <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) return <h2>Loading...</h2>;
      if (!auth.isAuthenticated) return <Redirect to="/login" />;
      return <Component {...props} />;
    }}
    />
  );
};

export default AuthRoute;
