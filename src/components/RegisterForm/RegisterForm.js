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
  },
  form: {
    textAlign: 'center',
    // width: '80%',
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
    marginBottom: '15px',
  },
  card: {
    width: '100%',
  },
}

theme.typography.h2 = {
  fontFamily: [
    'fantasy',
    'serif',
  ].join(','),
  fontSize: '1.5rem',
'@media (min-width:600px)': {
  fontSize: '1.5rem',
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

class RegisterForm extends Component {

  state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      street_address: '',
      city: '',
      state: '',
      zip: '',
      phone_number: '',
      email_address: ''
  };

  // POST route to register a person
  registerUser = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        street_address: this.state.street_address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone_number: this.state.phone_number,
        email_address: this.state.email_address
      },
    }); // end dispatch
  }; // end registerUser

  // sets local state
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    }); // end setState
  } // end handleInputChange

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
          <Grid item xs={12} sm={10} md={6}>
          <form className={classes.form} onSubmit={this.registerUser}>
            <Card className={classes.card}>
              <Typography component="h2" className={classes.header} variant="h2">
                Register 
              </Typography>
              {this.props.store.errors.registrationMessage && (
                <Typography className="alert" role="alert" variant="body1">
                  {this.props.store.errors.registrationMessage}
                </Typography>
              )}
            <CardContent>
              <Grid container justify="center">
                <Grid item xs={12} sm={6}>
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
                  <TextField 
                    label="First Name"
                    name="first_name"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('first_name')}
                    required
                    value={this.state.first_name}/>
                    <br></br>
                  <TextField 
                    label="Last Name"
                    name="last_name"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('last_name')}
                    required
                    value={this.state.last_name}/>
                    <br></br>
                  <TextField 
                    label="Email Address"
                    name="email_address"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('email_address')}
                    required
                    value={this.state.email_address}/>
                    <br></br>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    label="Street Address"
                    name="street_address"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('street_address')}
                    required
                    value={this.state.street_address}/>
                    <br></br>
                  <TextField 
                    label="City"
                    name="city"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('city')}
                    required
                    value={this.state.city}/>
                    <br></br>
                  <TextField 
                    label="State"
                    name="state"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('state')}
                    required
                    value={this.state.state}/>
                    <br></br>
                  <TextField 
                    label="Zip"
                    name="zip"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('zip')}
                    required
                    value={this.state.zip}/>
                    <br></br>
                  <TextField 
                    label="Phone Number"
                    name="phone_number"
                    className={classes.textField}
                    onChange={this.handleInputChangeFor('phone_number')}
                    value={this.state.phone_number}/>
                    <br></br><br></br>
                </Grid>
              </Grid>
              <Button>
                <input className="btn" type="submit" name="submit" value="Register" />
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

export default connect(mapStoreToProps)(withStyles(styles)(RegisterForm));
