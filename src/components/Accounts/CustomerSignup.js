/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import {
  faKey, faUserCircle, faAddressBook, faPhone
}
  from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customerRegister } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

import {
  // eslint-disable-next-line import/named
  FormHead, Input, SelectState, SectionOne, SectionThree
} from './SectionOne';
import { SectionFarmer } from './Login';

const RegisterCustomer = () => {
  const [inputs, setInputs] = useState({
    email: '', firstName: '', lastName: '', location: '', password1: '', password2: '', phoneNumber: ''
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      email, firstName, lastName, location, password, password2, phoneNumber
    } = inputs;
    // eslint-disable-next-line no-negated-condition
    if (password !== password2) {
      dispatch(createMessage({ passwordNotMatch: 'Passwords do not match' }));
    } else {
      const newUser = {
        email, firstName, lastName, location, password, phoneNumber
      };
      dispatch(customerRegister(newUser));
    }
  };
  const {
    email, firstName, lastName, location, password, password2, phoneNumber
  } = inputs;
  return (
  <div id="section2" className="section-icon">
    <FormHead type="Customer" />
    <article>
      <form onSubmit={handleSubmit}>
        <h3 className="legend">Register Here</h3>
        <Input icon={faAddressBook} type="email" placeholder="Email" name="email" onChange={handleChange} value={email} />
        <Input icon={faPhone} type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} value={phoneNumber} />
        <Input icon={faUserCircle} type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={firstName} />
        <Input icon={faUserCircle} type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={lastName} />
        <Input icon={faKey} type="password" placeholder="Password" name="password" onChange={handleChange} value={password} />
        <Input icon={faKey} type="password" placeholder="Confirm Password" name="password2" onChange={handleChange} value={password2} />
        <SelectState value={location} onChange={handleChange} />
        <button type="submit" className="bt submit"> Register</button>
      </form>
    </article>
  </div>
  );
};

const CustomerSignup = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  if (isAuthenticated) return <Redirect to="/home" />;
  return (
    <div className="main-bg ">
          <div className="sub-main">
            {/* <!-- vertical tabs --> */}
            <div className="vertical-tab">
              <SectionOne />
              <SectionFarmer />
              <RegisterCustomer />
              <SectionThree />
            </div>

            <div className="clear"></div>
          </div>
        </div>
  );
};

export default CustomerSignup;
