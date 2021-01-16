import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
  header: {
    backgroundImage: 'linear-gradient(to right, #7fad14, #395208)',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '3%',
    radius: '5px',
    color: '#f8f8f8',
    // height: '3vh',
  },
  form: {
    textAlign: 'center',
  },
  textField: {
    marginTop: '1rem',
    width: '90%',
    backgroundColor: '#f8f8f8',
  },
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '60px',
  },
  card: {
    marginBottom: '15px',
  },
}

theme.typography.h2 = {
  fontFamily: [
    'fantasy',
    'serif',
  ].join(','),
  fontSize: '1rem',
'@media (min-width:600px)': {
  fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.body1 = {
  fontSize: '.7rem',
  '@media (min-width:600px)': {
    fontSize: '.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
  };

  // to set the session to the particular user
  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      }); // end dispatch
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    } // end conditinal
  }; // end login

  // handles the input values and sets local state
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    }); // end setState
  } // end handleInputChangeFor

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
        <Grid container spacing={6} className={classes.gridContainer} justify="center">
          <Grid item xs={12} sm={8} md={4}>
            <form className={classes.form} onSubmit={this.login}>
              <Card className={classes.card}>
                <Typography component="h2" className={classes.header} variant="h2">
                  Login 
                </Typography>
              {this.props.store.errors.loginMessage && (
                <Typography className="alert" role="alert" variant="body1">
                  {this.props.store.errors.loginMessage}
                </Typography>
              )}
              <CardContent>
                <TextField 
                  label="Username"
                  name="username"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('username')}
                  required
                  value={this.state.username}/>
                  <br></br>
                <TextField 
                  type="password"
                  label="Password"
                  name="password"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('password')}
                  required
                  value={this.state.password}/>
                  <br></br>
                  <br></br>
                <Button>
                  <input className="btn" type="submit" name="submit" value="Log In" />
                </Button>
              </CardContent>
              </Card>
            </form>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginForm));
