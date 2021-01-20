import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Moment from 'react-moment';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
    header: {
      margin: 'auto',
      color: '#648b16',
      textAlign: 'center',
      padding: '3%',
      radius: '5px',
    },
    header2: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: '1.2em',
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

class CheckoutPage extends Component {

    state = { 
        product_cost: '',
        shipping_cost: '',
        total_cost: '',
    };

    getItems = () => {
        return this.props.store.cart.cartReducer.map((e) => {
            return {
                id: e.id,
                quantity: e.sum
            }
        })
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'SEND_ORDER', payload: {
            product_cost: Number(this.props.store.cart.totalReducer[0]?.sum),
            shipping_cost: this.props.store.cart.shippingReducer,
            total_cost: this.props.store.cart.paymentReducer
        }})
        
        this.props.dispatch({ type: 'RESET_CART' });

        // this.props.dispatch({ type: 'RESET_CART_ITEMS' });
        // this.props.dispatch({ type: 'RESET_CART_TOTAL' });
        // this.props.dispatch({ type: 'RESET_PAYMENT_TOTAL' });
    }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <center>
            <ThemeProvider theme={theme}>
                <Typography component="h3" className={classes.header} variant="h3">
                  Payment Successful!
                </Typography>
                <Typography component="h5" className={classes.header2} variant="h5">
                  Thank you for shopping at Towanda's Gallipot 
                    <br></br>
                  and supporting small businesses!
                </Typography>
                <img src={window.location.origin + '/image/mushrooms.png'} 
                    alt="Mushrooms" 
                    className="flower2"/>
            </ThemeProvider>
          </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CheckoutPage));
