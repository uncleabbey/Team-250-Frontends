/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-type';
import production from './product';


const RenderProduct = ({ products }) => (
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
const ourProduct = production.map((good) => <RenderProduct key={good.id} products={good} />);

const Homepage = () => (
    <div id="body">
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

export default Homepage;
