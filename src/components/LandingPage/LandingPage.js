import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './LandingPage.css';
// import RegisterForm from '../RegisterForm/RegisterForm';

const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    marginTop: '10%',
    radius: '5px',
    color: '#648b16',
    fontSize: '2em',
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
    fontSize: '2em',
    fontFamily: 'fantasy',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  // form: {
  //   width: '100%',
  // },
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

// theme.typography.h2 = {
//   fontSize: '1rem',
// '@media (min-width:320px)': {
//   fontSize: '1rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.5rem',
//   },
// };

// theme.typography.h3 = {
//   fontSize: '1rem',
// '@media (min-width:320px)': {
//   fontSize: '1rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.5rem',
//   },
// };

// theme.typography.p = {
//   fontSize: '1rem',
// '@media (min-width:320px)': {
//     fontSize: '1rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.5rem',
//   },
// };

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

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
          {/* <Grid item xs={12} sm={6}> */}
            
              {/* <RegisterForm className={classes.form}/>
            <center>
              <Typography className={classes.question}>
                Already a Member?
              </Typography>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LandingPage));
