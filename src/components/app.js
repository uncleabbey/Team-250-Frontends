/* eslint-disable sort-imports */
import './dash.css';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Footer from './Footer';
import Hompage from './Homepage';
import { Login } from './Login';
// import Navbar from './Navbar';
import Password from './Password';
import Dashboard from './Dashoard';
import store from '../store';
import Alerts from './layout/Alerts';
import { loadUser } from '../actions/auth';
import FarmerSignup from './Accounts/FarmerSignup';
import CustomerSignup from './Accounts/CustomerSignup';
import Nav from './layout/Nav';
import Page404 from './layout/Page404';
import Centerdash from './Centerdash';

const alertOptions = {
  position: 'top center',
  timeout: 3000
};

class App extends Component {
  state = {
    filterText: ''
  };

  filterUpdate = (value) => {
    // eslint-disable-next-line no-invalid-this
    this.setState({
      filterText: value
    });
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div>
                <Nav />
                <Alerts />
                <Switch>
                  <Route path="/" exact>
                    <Hompage filterText={this.state.filterText} />
                  </Route>
                  <Route path="/home" exact>
                    <Hompage filterText={this.state.filterText} />
                  </Route>
                  <Route path="/login" exact component={Login} />
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/signup/farmer" exact component={FarmerSignup} />
                  <Route path="/signup/customer" exact component={CustomerSignup} />
                  <Route path="/forgetpsw" exact component={Password} />
                  <Route path="/center" component={Centerdash} />
                  <Route component={Page404} />
                </Switch>
                <Footer />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
