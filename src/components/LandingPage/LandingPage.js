import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    marginTop: '30px',
    radius: '5px',
    color: '#648b16',
    height: '3vh',
    fontSize: '2em',
    fontFamily: 'fantasy',
  },
  form: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '60px',
    marginBottom: '15px',
  },
  paragraph: {
    fontFamily: 'fantasy',
    marginBottom: '10px',
    marginTop: '10px',
  },
  intro: {
    fontFamily: 'fantasy',
    color: '#648b16',
    marginBottom: '30px',
    marginTop: '30px',
  },
  question: {
    marginBottom: '10px',
  },
}

theme.typography.h2 = {
  fontSize: '1rem',
'@media (min-width:320px)': {
  fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h3 = {
  fontSize: '1rem',
'@media (min-width:320px)': {
  fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.p = {
fontSize: '1rem',
'@media (min-width:320px)': {
  fontSize: '1rem',
},
[theme.breakpoints.up('md')]: {
  fontSize: '1.5rem',
},
};

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
          <Grid item xs={12} sm={6}>
            <ThemeProvider>
              <Typography variant="h3" component="h3" className={classes.header}>
                WHAT'S IN A NAME?
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                ~Evelyn Couch, Fried Green Tomatoes.
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                gal·li·pot
                <br></br>
                /ˈɡaləˌpät/
                <br></br>
                noun
              </Typography >
              <Typography variant="h5" component="h5" className={classes.intro}>
                HISTORICAL
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                A small pot made from glazed earthenware or metal, used by pharmacists to hold medicines or ointments.
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
              <RegisterForm className={classes.form}/>
            <center>
              <Typography className={classes.question}>
                Already a Member?
              </Typography>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LandingPage));
