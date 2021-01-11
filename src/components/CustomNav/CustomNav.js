import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './CustomNav.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function CustomNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-haspopup="true" 
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>&nbsp;</MenuItem>
                <MenuItem onClick={handleClose}>About Me</MenuItem>
                <MenuItem onClick={handleClose}>Consultations</MenuItem>
                <MenuItem onClick={handleClose}>Products</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>Cart</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/home">
                {/* <img src={window.location.origin + '/images/logo.jpg'} alt="herb witch logo" className="logo"/> */}
                <h2 className="nav-title">Towanda's Gallipot</h2>
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 items in cart" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
                <Typography>
                    Login/Register
                </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}