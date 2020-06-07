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
import AddProduct from './products/AddProduct';
// import PrivateRoute from './layout/PrivateRoute';
import ProductDetails from './products/ProductDetails';
import CartItems from './orders/Cart';
import Checkout from './orders/Checkout';

const alertOptions = {
  position: 'top center',
  timeout: 4000
};

class App extends Component {
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
                  <Route path="/" exact component={Hompage} />
                  <Route path="/home" exact component={Hompage} />
                  <Route path="/products/:id" exact component={ProductDetails} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/signup/farmer" exact component={FarmerSignup} />
                  <Route path="/signup/customer" exact component={CustomerSignup} />
                  <Route path="/forgetpsw" exact component={Password} />
                  <Route path="/cart" exact component={CartItems} />
                  <Route path="/checkout" exact component={Checkout} />
                  <Route exact path="/product/add" component={AddProduct} />
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
