/* eslint-disable sort-imports */
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Footer from './layout/Footer';
import Hompage from './homepage/Homepage';
import { Login } from './Accounts/Login';
import Password from './Accounts/Password';
import Dashboard from './Accounts/Dashoard';
import store from '../store';
import Alerts from './layout/Alerts';
import { loadUser } from '../actions/auth';
import FarmerSignup from './Accounts/FarmerSignup';
import CustomerSignup from './Accounts/CustomerSignup';
import Nav from './layout/Nav';
import Page404 from './layout/Page404';
import AddProduct from './products/AddProduct';
import PrivateRoute from './layout/PrivateRoute';
import ProductDetails from './products/ProductDetails';
import CartItems from './orders/Cart';
import Checkout from './orders/Checkout';
import Thanks from './orders/Thanks';
import AuthRoute from './layout/AuthRoute';
import UserOrders from './orders/UserOrders';
import Contacts from './contact/Contact';
import About from './about/About';
import ChangePassword from './Accounts/ChangePassword';
import CheckMail from './layout/CheckMail';

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
                  <PrivateRoute path="/dashboard" exact component={Dashboard} />
                  <Route path="/signup/farmer" exact component={FarmerSignup} />
                  <Route path="/signup/customer" exact component={CustomerSignup} />
                  <Route path="/forgetpsw" exact component={Password} />
                  <Route path="/password/reset" component={ChangePassword} />
                  <Route path="/contactus" exact component={Contacts} />
                  <Route path="/about" exact component={About} />
                  <Route path="/cart" exact component={CartItems} />
                  <Route path="/checkmail" exact component={CheckMail} />
                  <AuthRoute path="/checkout" exact component={Checkout} />
                  <AuthRoute path="/thanks" component={Thanks} />
                  <AuthRoute path="/order/user" component={UserOrders} />
                  <PrivateRoute exact path="/product/add" component={AddProduct} />
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
