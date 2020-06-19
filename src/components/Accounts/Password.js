/* eslint-disable max-lines-per-function */
/* eslint-disable sort-imports */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SectionCustomer, SectionOne } from './SectionOne';
import { SectionFarmer } from './Login';
import { resetPassword } from '../../actions/auth';

const Password = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email };
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(resetPassword(data));
    // props.history.push('/checkmail');
  };
  if (isAuthenticated) return <Redirect to="/home" />;
  return (
      <div className="main-bg ">
        <div className="sub-main">
          <div className="vertical-tab">
            <SectionOne />
            <SectionFarmer />
            <SectionCustomer />
            <div id="section3" className="section-icon">
              <input type="radio" name="sections" id="option3" defaultChecked />
              <label htmlFor="option3" className="icon-left">
                <span className="fa fa-lock" aria-hidden="true">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Forgot Password?
              </label>
              <article>
                <form onSubmit={handleSubmit} className="p-3">
                  <h3 className="legend last">Reset Password</h3>
                  <div className="p-2">
                  <p className="para-style">
                    Enter your email address below and we will send you an email with instructions.
                  </p>
                  <p className="para-style-2">
                    <strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing account.</a>
                  </p>
                  </div>
                  <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={email}
                    onChange = {(event) => setEmail(event.target.value)}
                    className="form-control"/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="bt submit last-btn">
                      Reset
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Password;
