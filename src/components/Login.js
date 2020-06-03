import './app.css';
import React, { Component } from 'react';
import {
  faEnvelope, faKey, faLock, faPenSquare, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="main-bg ">
        <div className="sub-main">
          {/* <!-- vertical tabs --> */}
          <div className="vertical-tab">
            <div id="section1" className="section-icon">
              <input type="radio" name="sections" id="option1" checked />
              <label htmlFor="option1" className="icon-left">
                <span className="fa fa-user-circle" aria-hidden="true">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                Login
              </label>
              <article>
                <form action="#" method="post">
                  <h3 className="legend">Login Here</h3>
                  <div className="input">
                    <span className="fa fa-envelope-o" aria-hidden="true">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="input">
                    <span className="fa fa-key" aria-hidden="true">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                    <input type="password" placeholder="Password" name="password" required />
                  </div>
                  <button type="submit" className="bt submit">
                    Login
                  </button>
                  <a href="#" className="bottom-text">
                    Forgot Password?
                  </a>
                </form>
              </article>
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
          </div>
          {/* <!-- //vertical tabs --> */}
          <div className="clear"></div>
        </div>
        {/* <!-- copyright --> */}
      </div>
    );
  }
}

export default Login;
