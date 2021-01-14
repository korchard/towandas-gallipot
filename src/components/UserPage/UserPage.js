import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  header: {
    fontFamily: 'fantasy',
    marginBottom: '5%',
  },
};

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
            <Typography className={classes.header}>
              <h2 id="welcome">Welcome, {this.props.store.user.username}!</h2>
              <h4>Your ID is: {this.props.store.user.id}</h4>
                <LogOutButton className="log-in" />
            </Typography>
              <img src={window.location.origin + '/image/flower-orange.png'} alt="orange flower" className="flower"/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
