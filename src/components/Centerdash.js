/* eslint-disable max-lines-per-function */
// import { Link } from 'react-router-dom';
import React from 'react';

const Centerdash = () => (
    <div className="col-md-10 col-sm-1 display-table-cell v-align">
      {/* <!--<button type="button" className="slide-toggle">Slide Toggle</button> --> */}
      <div className="user-dashboard">
        <h2 className="text-center">Hello, Paul</h2>
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12 gutter m-auto">
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
                  <span>Period:</span> Last Week
                </button>
                <div className="dropdown-menu">
                  <a href="#">Last Month</a>
                  <a href="#">6 Months ago</a>
                  <a href="#">This Year</a>
                  <a href="#">All sales</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Centerdash;
