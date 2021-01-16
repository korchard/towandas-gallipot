import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import CartItem from './CartItem';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme();

const styles = {
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
  }

class CartPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'ADD_TO_CART' });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
          <Grid container spacing={4} className={classes.gridContainer}>
              {this.props.store.cart.map((item) => {
                JSON.stringify(this.props.store.cart)
                return(
                  <CartItem key= {item.id} item={item}/>
                 );
              })} 
          </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
