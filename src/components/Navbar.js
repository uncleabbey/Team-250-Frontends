import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import locations from './location';
import min from './Items';

class Navbar extends Component {
  renderItems = (link) => (
    <div key={link.id}>
      <div className="">
        <ul id="ul">
          <li id="li">
            <span id="a" key={link.id} className="head">
              <NavLink to={link.link} activeStyle={{ color: '#00ad45', fontWeight: 'bolder' }}>{link.item}</NavLink>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  render() {
    return (
      <div className="">
        <div className="nav" key={min.id}>
          {min.map((item) => this.renderItems(item))}
          <nav className="product-filter">
            <div className="sort">
              <input
                type="text"
                id="fil"
                placeholder="Filter by product"
                ref={(inp) => {
                  this.myValue = inp;
                }}
                onChange={this.productChange}
              />
              <select id="sel" placeholder="filter by location">
                {locations.map((item) => (
                  <option key={item.id} value={item.State} onChange={this.locationChange}>
                    {item.State}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;


{ /* <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12 gutter m-auto">
            <div className="sales">
              <h2>Your Sale is { dailySales }</h2>
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
        </div> */ }
