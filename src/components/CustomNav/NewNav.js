import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './CustomNav.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  link: {
    textDecoration: 'none',
    color: '#f2f2f2',
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
    height: '170px',
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
}));

theme.typography.h6 = {
    fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

const NewNav = (props) => {
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

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.header}>
          <img src={window.location.origin + '/image/logo.jpg'} alt="herb witch logo" className={classes.logo}/>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link to="/home" className={classes.link}>
              Towanda's Gallipot
            </Link>
          </Typography>
            <div className="nav-right">
                {/* <Typography> */}
                    <Link className="nav-link" to={loginLinkData.path}>
                        {/* Show this link if they are logged in or not,
                        but call this link 'Home' if they are logged in,
                        and call this link 'Login / Register' if they are not */}
                        {loginLinkData.text}
                    </Link>
                {/* </Typography>
                <Typography> */}
                    <Link className="nav-link" to="/cart">
                        <ShoppingCartIcon/>
                    </Link>
                {/* </Typography> */}
        {/* Show the link to the info page and the logout button if the user is logged in */}
                {props.store.user.id && (
                <>
                    <Typography>
                        <Link className="nav-link" to="/previous-orders">
                            Orders
                        </Link>
                    </Typography>
                    <LogOutButton className="nav-link" />
                </>
                )}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}>
                        <MenuIcon />
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
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

export default connect(mapStoreToProps)(NewNav);