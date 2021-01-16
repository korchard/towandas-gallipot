import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import CartItem from './CartItem';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
  }

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
        {JSON.stringify(this.props.store.cart)}
        {(this.props.store.cart.length > 0) ?
          <Grid container spacing={4} className={classes.gridContainer}>
              {this.props.store.cart.map((item) => {
                  return (
                      <CartItem key= {item.id} item={item}/>
                  );
              })} 
          </Grid> :
          <h2>No items are found in the cart</h2>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
