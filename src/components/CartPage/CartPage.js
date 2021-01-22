import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import CartItem from './CartItem';
import PayPal from '../CheckoutPage/PayPal';

// STYLING
import './CartPage.css'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
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
    header2: {
      margin: 'auto',
      fontFamily: 'fantasy',
      textAlign: 'center',
      fontSize: '2em',
      padding: '3%',
      radius: '5px',
    },
    root: {
      marginBottom: '5%',
      minWidth: 300,
    },
    orderDetails: {
      marginLeft: '5%',
    },
    subtitle1: {
      paddingBottom: '5%',
    }
  }

  // responsiveness
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

class CartPage extends Component {

  // state to determine if paypal is visible or checkout button
  state = {
    checkout: false
  }

  // to retrieved the cart items and total
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART' });
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
    this.props.dispatch({ type: 'GET_CART_TOTAL' });
  } // end componentDidMount

  // sets state to true or false depending if the paypal is available
  checkout = () => {
    this.setState({
      checkout: !this.state.checkout
    }); // end setState
  } // end checkout

  // sends the order to the database
  sendOrder = () => {
    this.props.dispatch({ type: 'SEND_ORDER', payload: {
      product_cost: Number(this.props.store.cart.totalReducer[0]?.sum),
      shipping_cost: this.props.store.cart.shippingReducer,
      total_cost: this.props.store.cart.paymentReducer
    }}); // end dispatch
  } // end sendOrder

  // calculates the shipping cost based on cart item cost
  calculateShipping = () => {
    let shipping = null;
    if (this.props.store.cart.totalReducer[0]?.sum <= 20.00) {
      shipping = '5.00'; 
    } else if (this.props.store.cart.totalReducer[0]?.sum <= 50.00) {
      shipping = '8.00';
    } else if (this.props.store.cart.totalReducer[0]?.sum <= 100.00) {
      shipping = '10.00';
    } else if (this.props.store.cart.totalReducer[0]?.sum > 100.00) {
      shipping = '0.00';
    } // end conditional 
    // dispatches the result to the reducer to access later
    this.props.dispatch({ type: 'SET_SHIPPING', payload: Number(shipping) });
    return shipping;
  } // end calculateShipping

  // calculates the total including shipping costs
  calculateTotal = () => {
    let total = null;
    if (this.props.store.cart.totalReducer[0]?.sum <= 20.00) {
      total = (Number(5.00) + Number(this.props.store.cart.totalReducer[0]?.sum)); 
    } else if (this.props.store.cart.totalReducer[0]?.sum <= 50.00) {
      total = (Number(8.00) + Number(this.props.store.cart.totalReducer[0]?.sum)); 
    } else if (this.props.store.cart.totalReducer[0]?.sum <= 100.00) {
      total = (Number(10.00) + Number(this.props.store.cart.totalReducer[0]?.sum)); 
    } else if (this.props.store.cart.totalReducer[0]?.sum > 100.00) {
      total = Number(this.props.store.cart.totalReducer[0]?.sum); 
    } // end conditional
    // dispatches the total to a reducer to be accessed elsewhere
    this.props.dispatch({ type: 'SET_PAYMENT_TOTAL', payload: total });
    return total;
  }

  render() {
    const { classes } = this.props;

    return (

      <div>
        {(this.props.store.cart.cartReducer.length > 0) ?
          <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={7}>
              {this.props.store.cart.cartReducer.map((item) => {
                  return (
                      <CartItem key= {item.id} item={item}/>
                  );
              })} 
            </Grid>
            <Grid item xs={12} sm={4} className={classes.orderDetails}>
                <Paper className={classes.root}>
                  <CardContent>
                    <Typography component="h3" className={classes.header2}>
                      Order Summary
                    </Typography>
                    <br></br>
                    <Typography component="subtitle1" className={classes.subtitle1}>
                      Subtotal................................
                       ${this.props.store.cart.totalReducer[0]?.sum}
                    </Typography>
                    <br></br><br></br>
                    <Typography component="subtitle1" className={classes.subtitle1}>
                      Shipping Cost........................
                       <>${this.calculateShipping()}</>
                    </Typography>
                    <br></br><br></br>
                    <Typography component="h3" className={classes.header2}>
                      Total: ${this.calculateTotal()}.00
                    </Typography>
                    {(this.state.checkout) ? 
                    <>
                    <PayPal checkout={this.checkout} sendOrder={this.sendOrder}/> 
                    <center>
                      <Button className={classes.button} onClick={this.checkout}>
                        <input className="btn" type="button" value="Disregard Checkout" />
                      </Button>
                    </center>
                    </>
                    :
                    <center>
                      <Button className={classes.button} onClick={this.checkout}>
                        <input className="btn" type="button" value="Checkout" />
                      </Button>
                    </center>
                    }
                  </CardContent>
                </Paper>
            </Grid>
          </Grid> 
          :
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
