import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './CustomNav.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();
const drawerWidth = 240;

const style = {
  header: {
    marginLeft: '0',
  },
};

const styles = {
  root: {
    display: 'flex',
    marginLeft: '0',
    marginBottom: '50px',
    height: '170px',
  },
  header: {
    backgroundImage: 'linear-gradient(to right, #7fad14, #395208)',
    width: '100%',
    color: '#f8f8f8',
    overflow: 'hidden',
    height: '170px',
    marginLeft: '0',
  },
  logo: {
    marginLeft: '0',
    height: '170px',
    width: 'auto',
    float: 'left',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'fantasy',
    fontSize: '40px',
    fontWeight: '700',
    display: 'inline-block',
    paddingLeft: '40px',
    paddingTop: '25px',
  },
  link: {
    textDecoration: 'none',
    color: '#f2f2f2',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
};

theme.typography.h6 = {
  fontSize: '1.2rem',
'@media (min-width:600px)': {
  fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

class CustomNav extends Component {

  state = {
    open: false,
  }
  
  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  }

 handleDrawerClose = () => {
    this.setState({
      open: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar className={classes.header} style={style}>
          <img src={window.location.origin + '/image/logo.jpg'} alt="herb witch logo" className={classes.logo}/>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link to="/home" className={classes.link}>
              Towanda's Gallipot
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.handleDrawerOpen}
            className={clsx(this.state.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: this.state.open,
        })}
      >
        <div className={classes.drawerHeader} />
        </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['About Me', 'Consultations', 'Products', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
}

export default connect(mapStoreToProps)(withStyles(styles)(CustomNav));