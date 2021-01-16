import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import CartItem from './CartItem';

// STYLING
import './CartPage.css'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
    header: {
      margin: 'auto',
      color: '#648b16',
      textAlign: 'center',
      padding: '3%',
      radius: '5px',
    },
  }

  theme.typography.h3 = {
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

  const getCookie = (cookieName) => {
    // Get name followed by anything except a semicolon
    const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
  }

class CartPage extends Component {

  state = {
    cartItems: getCookie('cart') || 0,
    usernameId: getCookie(this.props.store.user.id) || '',
  }

  componentDidMount = () => {
    if (this.state.usernameId !== ''){
      this.setState({
        usernameId: getCookie(this.props.store.user.id)
      });
    }
  }

  removeCookie = () => {
    document.cookie = "usernameId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.componentDidMount();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {(this.props.store.cart.length > 0) ?
          <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={8}>
              {this.props.store.cart.map((item) => {
                  return (
                      <CartItem key= {item.id} item={item}/>
                  );
              })} 
            </Grid>
          </Grid> :
          <center>
            <ThemeProvider theme={theme}>
                <Typography component="h3" className={classes.header} variant="h3">
                  Cart is empty.
                </Typography>
              <img src={window.location.origin + '/image/flower-purple2.png'} 
                    alt="Purple flower" 
                    className="flower2"/>
            </ThemeProvider>
          </center>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
