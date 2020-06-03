import './app.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Hompage from './Homepage';
import Login from './Login';
import Navbar from './Navbar';
import Password from './Password';
import Signup from './Signup';

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
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgetpsw" exact component={Password} />

        <Footer />
      </div>
    );
  }
}

export default App;
