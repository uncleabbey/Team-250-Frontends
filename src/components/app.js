import './app.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Hompage from './Homepage';
import Navbar from './Navbar';

class App extends Component {
  state = {
    filterText: ''
  };

  filterUpdate = (value) => {
    this.setState({
      filterText: value
    });
  };

  render() {
    return (
      <div>
        <Navbar filterUpdate={this.filterUpdate} filterText={this.state.filterText} />
        <Route path="/" exact>
          <Hompage filterText={this.state.filterText} />
        </Route>

        <Footer />
      </div>
    );
  }
}

export default App;
