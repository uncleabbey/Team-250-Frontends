/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import './app.css';
import React, { useState } from 'react';
import {
  faEnvelope, faKey, faLock, faPenSquare, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';


const FormHead = () => (
  <>
    <input type="radio" name="sections" id="option1" defaultChecked />
    <label htmlFor="option1" className="icon-left">
      <span className="fa fa-user-circle" aria-hidden="true">
        <FontAwesomeIcon icon={faUserCircle} />
      </span>
        Login
    </label>
  </>
);
const Input = (props) => (
      <div className="input">
        <span className={props.className} aria-hidden="true">
            <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        required
        autoComplete="on"
        />
      </div>
);
const SectionOne = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    const data = {
      email,
      password
    };
    dispatch(login(data));
  };
  const { email, password } = inputs;
  return (
    <div id="section1" className="section-icon">
              <FormHead />
              <article>
                <form onSubmit={handleSubmit}>
                  <h3 className="legend">Login Here</h3>
                  <Input
                    icon={faEnvelope}
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="fa fa-envelope-o"
                    />
                  <Input
                  className="fa fa-key-o"
                  icon={faKey}
                  placeholder="Passoword"
                  type="password"
                  name="password" value={password} onChange={handleChange} />
                  <button type="submit" className="bt submit">
                    Login
                  </button>
                  <a href="#" className="bottom-text">Forgot Password?</a>
                </form>
              </article>
            </div>
  );
};

export const SectionFarmer = () => (
    <div id="section2" className="section-icon">
              <input type="radio" name="sections" id="option2" />
              <Link to="/signup/farmer">
                <label htmlFor="option2" className="icon-left">
                  <span className="fa fa-pencil-square" aria-hidden="true">
                    <FontAwesomeIcon icon={faPenSquare} />
                  </span>
                  Register Farmer
                </label>
              </Link>
            </div>
);

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


const SectionThree = () => (
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
            </div>
);


export const Login = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const isFarmer = useSelector(
    (state) => state.auth.isFarmer
  );
  if (isAuthenticated && isFarmer) return <Redirect to="/dashboard" />;
  if (isAuthenticated) return <Redirect to="/home" />;
  return (
    <div className="main-bg ">
        <div className="sub-main">
          {/* <!-- vertical tabs --> */}
          <div className="vertical-tab">
            <SectionOne />
            <SectionFarmer />
            <SectionCustomer />
            <SectionThree />
          </div>
          {/* <!-- //vertical tabs --> */}
          <div className="clear"></div>
        </div>
        {/* <!-- copyright --> */}
      </div>
  );
};
