import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#648b16',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    radius: '5px',
    color: '#f8f8f8',
    height: '3vh',
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

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
<div className={classes.root}>
      <Grid container spacing={6} className={classes.gridContainer} justify="center">
      <Grid item xs={12} sm={8} md={4}>
      <form className={classes.form} onSubmit={this.login}>
      <Card className={classes.card}>
          <Typography component="h2" className={classes.header}>
            Login 
          </Typography>
          {this.props.store.errors.loginMessage && (
            <Typography className="alert" role="alert">{this.props.store.errors.loginMessage}</Typography>
        )}
        <CardContent>
          <TextField 
            label="Username"
            name="username"
            className={classes.textField}
            onChange={this.handleInputChangeFor('username')}
            required
            value={this.state.username}
            />
            <br></br>
            <TextField 
            type="password"
            label="Password"
            name="password"
            className={classes.textField}
            onChange={this.handleInputChangeFor('password')}
            required
            value={this.state.password}
            />
            <br></br>
            <Button>
            <input className="btn" type="submit" name="submit" value="Log In" />
            </Button>
        </CardContent>
        </Card>
      </form>
      </Grid>
      </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginForm));
