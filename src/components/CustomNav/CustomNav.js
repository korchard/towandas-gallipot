import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

// COMPONENTS
import LogOutButton from '../LogOutButton/LogOutButton';

// STYLING
import './CustomNav.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    paddingLeft: '0',
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
    fontWeight: '700',
    // fontSize: '2.5em',
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

theme.typography.h3 = {
    fontSize: '1.5rem',
  '@media (min-width:320px)': {
    fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  theme.typography.body1 = {
    fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  };

const CustomNav = (props) => {
    let loginLinkData = {
      path: '/login',
      text: 'Login / Register',
    };
  
    // if someone is logged in, the home page goes to /user and Home
    // if they are not logged in it takes them to the loggin pages
    // this is what the loginLinkData.path and loginLinkData.text are doing
    if (props.store.user.id != null) {
      loginLinkData.path = '/user';
      loginLinkData.text = 'Profile';
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

  const itemsList = [
    {
      text: 'About Me', 
      onClick: () => props.history.push('/about'),
    }, 
    {
      text: 'Consultations', 
      onClick: () => props.history.push('/consultations'),
    }, 
    {
      text: 'Products', 
      onClick: () => props.history.push('/product'),
    }, 
    {
      text: 'Cart', 
      onClick: () => props.history.push('/cart'),
    }, 
    {
      text: 'Contact',
      onClick: () => props.history.push('/contact'),
    },
];

const loggedInList = [
    {
        text: 'Orders', 
        onClick: () => props.history.push('/previous-orders'),
    }, 
    {
        text: <LogOutButton />
    }, 
];

const adminList = [
    {
        text: 'Add/Edit Products', 
        onClick: () => props.history.push('/admin-product-add'),
    }, 
    {
        text: 'Incomplete Orders', 
        onClick: () => props.history.push('/admin-incomplete-orders'),
    }, 
    {
        text: 'Completed Orders', 
        onClick: () => props.history.push('/admin-completed-orders'),
    }, 
    {
        text: <LogOutButton />
    }, 
];

    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar className={classes.header}>
                <img src={window.location.origin + '/image/logo.jpg'} alt="herb witch logo" className={classes.logo}/>
                    <Typography variant="h3" noWrap className={classes.title} component="h3">
                      <Link to="/home" className={classes.link} variant="h3">
                          Towanda's Gallipot
                      </Link>
                    </Typography>
                <div className="nav-right">
                    <Link className="nav-link" to={loginLinkData.path}>
                        {/* Show this link if they are logged in or not,
                        but call this link 'Home' if they are logged in,
                        and call this link 'Login / Register' if they are not */}
                        {loginLinkData.text}
                    </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
                    {props.store.user.id && (
                        <>
                          <LogOutButton className="nav-link" />
                        </>
                    )}
                    <Link className="nav-link" to="/cart">
                      <Badge badgeContent={props.store.cart.length}>
                        <ShoppingCartIcon/>
                      </Badge>
                    </Link>
            
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
              })}>
                <div className={classes.drawerHeader} />
            </main>
          <Drawer className={classes.drawer} variant="persistent" anchor="right"
                  open={open} classes={{
                  paper: classes.drawerPaper,
              }}>
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
            <List>
              {itemsList.map((item, index) => {
                  const {text, onClick} = item;
                  return (
                <ListItem button key={text} onClick={onClick}>
                  <ListItemText primary={text} />
                </ListItem>
                )
              })}
            </List>
              <Divider />
            {props.store.user.administrator === false && (
                    <List>
                        {loggedInList.map((item, index) => {
                            const {text, onClick} = item;
                            return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        )})}
                    </List>
            )}
            {props.store.user.administrator === true && (
                    <List>
                        {adminList.map((item, index) => {
                            const {text, onClick} = item;
                            return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        )})}
                    </List>
            )}
          </Drawer>
          </ThemeProvider>
      </div>
  );
}

export default connect(mapStoreToProps)(withRouter(CustomNav));