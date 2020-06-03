import React, { Component } from 'react';
import {
  faEnvelopeOpen, faLock, faPenSquare, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Password extends Component {
  render() {
    return (
      <div className="main-bg ">
        <div className="sub-main">
          <div className="vertical-tab">
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
            <div id="section2" className="section-icon">
              <input type="radio" name="sections" id="option2" />
              <Link to="/signup">
                <label htmlFor="option2" className="icon-left">
                  <span className="fa fa-pencil-square" aria-hidden="true">
                    <FontAwesomeIcon icon={faPenSquare} />
                  </span>
                  Register
                </label>
              </Link>
            </div>
            <div id="section3" className="section-icon">
              <input type="radio" name="sections" id="option3" checked />
              <label htmlFor="option3" className="icon-left">
                <span className="fa fa-lock" aria-hidden="true">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Forgot Password?
              </label>
              <article>
                <form action="#" method="post">
                  <h3 className="legend last">Reset Password</h3>
                  <p className="para-style">
                    Enter your email address below and we will send you an email with instructions.
                  </p>
                  <p className="para-style-2">
                    <strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing account.</a>
                  </p>
                  <div className="input">
                    <span className="fa fa-envelope-o" aria-hidden="true">
                      <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </span>
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <button type="submit" className="bt submit last-btn">
                    Reset
                  </button>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;
