/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import { faKey, faLock, faPenSquare, faUserCircle, faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { farmerRegister } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import locations from '../../components/location';

export const SectionOne = () => (
  <div id="section1" className="section-icon">
    <input type="radio" name="sections" id="option1" />
    <Link to="/login">
      <label htmlFor="option1" className="icon-left">
        <span className="fa fa-user-circle" aria-hidden="true">
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        Login
      </label>
    </Link>
  </div>
);

export const Input = (props) => (
  <div className="input">
    <span className="fa fa-user-o" aria-hidden="true">
      <FontAwesomeIcon icon={props.icon} />
    </span>
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      required
      onChange={props.onChange}
      autoComplete="on"
    />
  </div>
);
export const SelectState = (props) => (
  <div className="input">
    <label className="hello">State:</label>
    <select name="location" value={props.value} onChange={props.onChange}>
      {locations.map((item) => (
        <option key={item.id} value={item.State}>
          {item.State}
        </option>
      ))}
    </select>
  </div>
);
export const FormHead = (props) => (
  <>
    <input type="radio" name="sections" id="option2" defaultChecked />
    <label htmlFor="option2" className="icon-left">
      <span className="fa fa-pencil-square" aria-hidden="true">
        <FontAwesomeIcon icon={faPenSquare} />
      </span>
      Register {props.type}
    </label>
  </>
);
export const SectionTwo = () => {
  const [inputs, setInputs] = useState({
    businessName: '',
    email: '',
    location: '',
    password1: '',
    password2: '',
    phoneNumber: ''
  });
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { businessName, email, location, password, password2, phoneNumber } = inputs;
    // eslint-disable-next-line no-negated-condition
    if (password !== password2) {
      dispatch(createMessage({ passwordNotMatch: 'Passwords do not match' }));
    } else {
      const newUser = {
        businessName,
        email,
        location,
        password,
        phoneNumber
      };
      dispatch(farmerRegister(newUser));
    }
  };
  const { businessName, email, location, password, password2, phoneNumber } = inputs;
  return (
    <div id="section2" className="section-icon">
      <FormHead type="Farmer" />
      <article>
        <form onSubmit={handleSubmit}>
          <h3 className="legend">Register Here</h3>
          <Input
            icon={faAddressBook}
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <Input
            icon={faPhone}
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={phoneNumber}
          />
          <Input
            icon={faUserCircle}
            type="text"
            placeholder="Business Name"
            name="businessName"
            onChange={handleChange}
            value={businessName}
          />
          <Input
            icon={faKey}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <Input
            icon={faKey}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={handleChange}
            value={password2}
          />
          <SelectState value={location} onChange={handleChange} />
          <button type="submit" className="bt submit">
            {' '}
            Register
          </button>
        </form>
      </article>
    </div>
  );
};

export const SectionCustomer = () => (
  <div id="section2" className="section-icon">
    <input type="radio" name="sections" id="option2" />
    <Link to="/signup/customer">
      <label htmlFor="option2" className="icon-left">
        <span className="fa fa-pencil-square" aria-hidden="true">
          <FontAwesomeIcon icon={faPenSquare} />
        </span>
        Register Customer
      </label>
    </Link>
  </div>
);

export const SectionThree = () => (
  <div id="section3" className="section-icon">
    <input type="radio" name="sections" id="option3" />
    <Link to="/forgetpsw">
      <label htmlFor="option3" className="icon-left">
        <span className="fa fa-lock" aria-hidden="true">
          <FontAwesomeIcon icon={faLock} />
        </span>
        Forgot Password?
      </label>
    </Link>
    <article>
      <form action="#" method="post">
        <h3 className="legend last">Reset Password</h3>
        <p className="para-style">Enter your email address below and we will send you an email with instructions.</p>
        <p className="para-style-2">
          <strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing account.</a>
        </p>
        <div className="input">
          <span className="fa fa-envelope-o" aria-hidden="true"></span>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <button type="submit" className="bt submit last-btn">
          Reset
        </button>
      </form>
    </article>
  </div>
);
