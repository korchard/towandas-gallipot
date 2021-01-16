import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
// import CartItem from './CartItem';

// STYLING
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

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
    // const { classes } = this.props;

    return (
      <div>
        {JSON.stringify(this.props.store.cart)}
        {/* {(this.props.store.cart !== undefined) ?
          <Grid container spacing={4} className={classes.gridContainer}>
              {this.props.store.cart.map((item) => {
                return(
                  <CartItem key={item.id} item={item}/>
                 );
              })} 
          </Grid> :
          <h2>No items are found in the cart</h2>
        } */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
