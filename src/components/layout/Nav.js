/* eslint-disable sort-imports */

/* eslint-disable react/prop-types */
/* eslint-disable no-ternary */
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import initials from './Helper';
import Cart from './ShoppingCart';
import { logout } from '../../actions/auth';


const loggedOut = (
<div className="logout">
    <Link to="/login"><button className="login-btn">Login</button></Link>
    <Link to="/signup/customer"><button className="login-btn reg-second">Signup</button></Link>
</div>
);

const LoggedIn = (props) => (
  <div className="login">
    <Link to={'/dashboard/user'}><span>{initials(`${props.users.first_name} ${props.users.first_name}` || props.users.business_name)}</span></Link>
    <button className="login-btn" onClick={props.handleClick}>Logout</button>
  </div>
);

const NavListItem = (props) => (
    <li className="nav-item nav-link">
        <NavLink
          to={props.to}
          activeStyle={{ color: '#00ad45', fontWeight: 'bolder' }}>
            {props.name}
        </NavLink>
  </li>
);

const NavList = () => (
  <ul className="navbar-nav mr-auto">
    <NavListItem to={'/home'} name="Home" />
    <NavListItem to={'/products'} name="Products" />
    <NavListItem to={'/about'} name="About Us" />
    <NavListItem to={'/contact'} name="Contact Us" />
  </ul>
);

const SearchForm = () => (
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search........" aria-label="Search" />
  </form>
);

const Nav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const handleClick = () => dispatch(logout());
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
    <img src="https://res.cloudinary.com/kayode/image/upload/v1591256550/farm_icon_myu6pc.svg" alt="Icon" width="30" height="30" className="d-inline-block align-top" />
  {'  '}Zerohunger
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavList />
      <SearchForm />
      <Cart />
      {isAuthenticated ? <LoggedIn users = {user} handleClick={handleClick} /> : loggedOut }
    </div>
    </div>
  );
};

export default Nav;
