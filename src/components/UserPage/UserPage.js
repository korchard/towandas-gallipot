import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import LogOutButton from '../LogOutButton/LogOutButton';

// STYLING
import './UserPage.css';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  header: {
    fontFamily: 'fantasy',
    marginBottom: '5%',
    marginTop: '5%',
  },
};

theme.typography.h5 = {
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

class UserPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <div className={classes.header}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" component="h5" id="welcome">
                Welcome, {this.props.store.user.username}!
              </Typography>
              <Typography variant="body1" component="p" className="paragraph">
                Your ID is: {this.props.store.user.id}
              </Typography>
                  <LogOutButton className="log-in" />
            </ThemeProvider>
          </div>
              <img src={window.location.origin + '/image/flower-orange.png'} 
                    alt="orange flower" 
                    className="flower"/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
