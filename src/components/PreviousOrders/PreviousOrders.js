import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import OrderItem from './OrderItem';

// STYLING
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

class PreviousOrders extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
    this.props.dispatch({ type: 'GET_PREVIOUS_ORDERS' });
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
                      <OrderItem key= {item.id} item={item}/>
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

export default connect(mapStoreToProps)(withStyles(styles)(PreviousOrders));
