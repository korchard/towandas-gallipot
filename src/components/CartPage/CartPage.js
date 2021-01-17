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

class CartPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART' });
  }

  render() {
    const { classes } = this.props;

    return (

      <div>
        {(this.props.store.cart.length > 0) ?
          <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={10} sm={8}>
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
