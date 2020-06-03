import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import locations from './location';
import min from './Items';

class Navbar extends Component {
  productChange = () => {
    // this.setState({ filterProduct: e.target.value });
    const val = this.myValue.value;
    this.props.filterUpdate(val);
  };

  renderItems = (link) => (
    <div key={link.id}>
      <div className="">
        <ul id="ul">
          <li id="li">
            <a id="a" key={link.id} className="head">
              {link.item}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  render() {
    return (
      <div className="">
        <a className="nav" key={min.id}>
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
        </a>
      </div>
    );
  }
}

export default Navbar;
