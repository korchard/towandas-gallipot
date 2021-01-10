import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  // if someone is logged in, the home page goes to /user and Home
  // if they are not logged in it takes them to the loggin pages
  // this is what the loginLinkData.path and loginLinkData.text are doing
  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <div className="nav-block">
      <img src={window.location.origin + '/images/logo.jpg'} alt="herb witch logo" className="logo"/>
      <Link to="/home">
        <h2 className="nav-title">Towanda's Gallipot</h2>
      </Link>
      </div>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* <PreviousOrders /> */}
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* do something like this below for the admin routes - which should also be protected */}
        {(props.store.user.id === 1 || props.store.user.id === 2) && (
          <>
            {/* <ProductAdminDisplay /> */}
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
      </div>
      {/* <Link to="/home">
        <h2 className="nav-title">Towanda's Gallipot</h2>
      </Link>
      <div className="nav-bottom">
        <Link className="nav-link" to="/about">
          About Me
        </Link>
        <Link className="nav-link" to="/consultations">
          Consultations
        </Link>
        <Link className="nav-link" to="/product">
          Products
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div> */}
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
