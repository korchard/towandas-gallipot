import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './CustomNav.css';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const headersData = [
  {
    label: "About Me",
    href: "/about",
  },
  {
    label: "Consultations",
    href: "/consultations",
  },
  {
    label: "Products",
    href: "/product",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#6d9414",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 700px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "serif",
    fontWeight: 700,
    size: "18px",
    marginRight: "38px",
  },
  toolbar: {
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

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

  const { header, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 700
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {gallipotLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
    
            <Drawer
              {...{
                anchor: "right",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
    
            <div>{gallipotLogo}</div>
          </Toolbar>
        );
      };

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };
    
      const gallipotLogo = (
        <>
          <img src={window.location.origin + '/images/logo.jpg'} alt="herb witch logo" className="logo" />
          <Link to="/home">
              <h2 className="nav-title">Towanda's Gallipot</h2>
          </Link>
        </>
      );

      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          );
        });
      };

  return (
    <div className="nav">
      {/* <div className="nav-block">
      <img src={window.location.origin + '/images/logo.jpg'} alt="herb witch logo" className="logo"/>
      <Link to="/home">
        <h2 className="nav-title">Towanda's Gallipot</h2>
      </Link>
      </div> */}
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
      <header>
        <AppBar className={header}>
          
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);