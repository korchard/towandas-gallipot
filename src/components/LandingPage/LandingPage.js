import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './LandingPage.css';

// create a variable for the theme
const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    marginTop: '10%',
    radius: '5px',
    color: '#648b16',
    fontFamily: 'fantasy',
    textAlign: 'right',
    paddingRight: '20px',
  },
  header2: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    marginTop: '10%',
    radius: '5px',
    color: '#648b16',
    fontFamily: 'fantasy',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: '2%',
    marginBottom: '15px',
  },
  paragraph: {
    fontFamily: 'fantasy',
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'right',
    paddingRight: '20px',
  },
  paragraph2: {
    fontFamily: 'fantasy',
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'left',
    paddingLeft: '20px',
  },
}

// responsiveness
theme.typography.h6 = {
  fontSize: '1rem',
'@media (min-width:320px)': {
  fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.5rem',
'@media (min-width:320px)': {
  fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.p = {
  fontSize: '.7rem',
'@media (min-width:320px)': {
    fontSize: '.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

class LandingPage extends Component {

  // routes the user to the login page when button is clicked
  // onLogin = (event) => {
  //   this.props.history.push('/login');
  // }; // end onLogin

  // retrieves the cart items to display in the cart icon
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
  } // end componentDidMount

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.gridContainer} justify="center">
          <Grid container justify="center" className={classes.gridContainer}>
          <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={5} >
              <Typography variant="h3" component="h3" className={classes.header}>
                WHAT'S IN A NAME?
              </Typography>
              <Typography variant="h6" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
              <Typography variant="subtitle1" component="p" className={classes.paragraph}>
                ~Evelyn Couch, Fried Green Tomatoes.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/roots.jpg'} alt="roots" className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/bee.jpg'} alt="bees pollinating" className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h3" component="h3" className={classes.header2}>
                gal·li·pot
                /ˈɡaləˌpät/
              </Typography>
              <Typography variant="h6" component="p" className={classes.paragraph2}>
                noun
              </Typography >
              <Typography variant="subtitle1" component="p" className={classes.paragraph2}>
                HISTORICAL
              </Typography >
              <Typography variant="h6" component="p" className={classes.paragraph2}>
                1. A small pot made 
                from glazed earthenware or metal, 
                used by pharmacists to hold 
                medicines or ointments.
              </Typography>
            </Grid>
          </ThemeProvider>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(LandingPage));
