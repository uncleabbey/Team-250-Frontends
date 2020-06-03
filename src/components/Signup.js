import React, { Component } from 'react';
import {
  faKey, faLock, faPenSquare, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import locations from './location';

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="main-bg ">
          <div className="sub-main">
            {/* <!-- vertical tabs --> */}
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
                <input type="radio" name="sections" id="option2" checked />
                <label htmlFor="option2" className="icon-left">
                  <span className="fa fa-pencil-square" aria-hidden="true">
                    <FontAwesomeIcon icon={faPenSquare} />
                  </span>
                  Register
                </label>
                <article>
                  <form action="#" method="post">
                    <h3 className="legend">Register Here</h3>
                    <div className="input">
                      <span className="fa fa-user-o" aria-hidden="true">
                        <FontAwesomeIcon icon={faUserCircle} />
                      </span>
                      <input type="text" placeholder="Company Name" name="name" required />
                    </div>
                    <div className="input">
                      <span className="fa fa-key" aria-hidden="true">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                      <input type="password" placeholder="Password" name="password" required />
                    </div>
                    <div className="input">
                      <span className="fa fa-key" aria-hidden="true">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                      <input type="password" placeholder="Confirm Password" name="password" required />
                    </div>

                    <div className="input">
                      <span className="fa fa-user-o" aria-hidden="true"></span>
                      <input type="text" name="full_name" placeholder="Adress" required />
                    </div>
                    <div className="input">
                      <label className="hello">State:</label>
                      <select>
                        {locations.map((item) => (
                          <option key={item.id} value={item.State}>
                            {item.State}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="bt submit">
                      Register
                    </button>
                  </form>
                </article>
              </div>
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
                    <p className="para-style">
                      Enter your email address below and we will send you an email with instructions.
                    </p>
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
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
