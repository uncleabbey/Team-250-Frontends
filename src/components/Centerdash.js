import React from 'react';
import { Link } from 'react-router-dom';

const Centerdash = () => (
    <div className="col-md-10 col-sm-1 display-table-cell v-align">
      {/* <!--<button type="button" className="slide-toggle">Slide Toggle</button> --> */}
      <div className="row">
        <header>
          <div className="col-md-7">
            <nav className="navbar-default pull-left">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="offcanvas"
                  data-target="#side-menu"
                  aria-expanded="false"
                ></button>
              </div>
            </nav>
            <div className="search hidden-xs hidden-sm">
              <input type="text" placeholder="Search" id="search" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="header-rightside">
              <ul className="list-inline header-top pull-right">
                <li className="hidden-xs">
                  <Link to="/addproduct">
                    <a href="#" className="add-project" data-toggle="modal" data-target="#add_project">
                      Add Product
                    </a>
                  </Link>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      src="https://res.cloudinary.com/pauliski/image/upload/v1591314997/Paulpix_leyssw.jpg"
                      alt="user"
                    />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="navbar-content">
                        <span>Paul A.</span>
                        <p className="text-muted small">parokoola@gmail.com</p>
                        <div className="divider"></div>
                        <a href="#" className="view btn-sm active">
                          View Profile
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <div className="user-dashboard">
        <h1>Hello, Paul</h1>
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12 gutter">
            <div className="sales">
              <h2>Your Sale</h2>

              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-lg dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Period:</span> Last Year
                </button>
                <div className="dropdown-menu">
                  <a href="#">2020</a>
                  <a href="#">2021</a>
                  <a href="#">2022</a>
                  <a href="#">2023</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Centerdash;
