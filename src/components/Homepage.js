import React, { Component } from 'react';
import production from './product';

class Homepage extends Component {
  renderProduct = (products) => (
    <div className="product-card" key={products.id}>
      <div className="product-image">
        <img src={products.src} />
      </div>
      <div className="product-info">
        <h5 id="h5">{products.name}</h5>
        <h6>{products.amount}</h6>
      </div>
    </div>
  );

  state = {};

  render() {
    const { filterText } = this.props;
    const ourProduct = production
      .filter((good) => good.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
      .map((good) => this.renderProduct(good));

    return (
      <div id="body">
        <p id="fill">filterText value is: {this.props.filterText}</p>
        <nav className="product-filter">
          <h1 id="h1">Available Produce</h1>
        </nav>

        <section>
          <div>
            <div className="products">{ourProduct}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
