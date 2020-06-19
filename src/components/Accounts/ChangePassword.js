/* eslint-disable no-negated-condition */
/* eslint-disable max-lines-per-function */
/* eslint-disable sort-imports */
import './changePassword.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changePassword } from '../../actions/auth';
import { createMessage } from '../../actions/messages';


const Input = ({
  handleChange, name, value, label
}) => (
  <div className="form-group">
    <label htmlFor="password1">{label}</label>
    <input
      className="form-control col-sm-8"
      type="password"
      name={name}
      value={value}
      onChange={handleChange}
    />
  </div>
);
const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const [inputs, setInputs] = useState({
    password1: '',
    password2: ''
  });
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const { password1, password2 } = inputs;

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = new URLSearchParams(props.location.search);
    const token = query.get('token');
    if (password1 !== password2) {
      dispatch(createMessage({ passwordNotMatch: 'Passwords do not match' }));
    } else {
      const data = {
        password: password1,
        token
      };
      dispatch(changePassword(data));
      setInputs({
        password1: '',
        password2: ''
      });
    }
  };
  if (isAuthenticated) return <Redirect to="/home" />;
  return (
    <div className="reset-password">
      <div className="reset-form-container">
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        name="password1"
        value={password1}
        label="Password"
        />
      <Input
        handleChange={handleChange}
        name="password2"
        value={password2}
        label="Repeat Password"
        />
      <div className="form-group">
        <button type="submit" className="btn btn-success">Change Password</button>
      </div>
      </form>
      </div>
    </div>
  );
};
export default ChangePassword;
