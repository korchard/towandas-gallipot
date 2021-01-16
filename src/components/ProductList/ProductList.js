import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductsItem from '../ProductsItem/ProductsItem';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
  },
};

class ProductList extends Component {

  // calls the GET route to display thee products
  componentDidUpdate = () => {
    console.log('productlist component', this.props.store.search);
    if (this.props.store.search.length !== 0) {
      // this.props.dispatch({ type: 'GET_PRODUCT' });
    }
  } // end componentDidMount

  render() {
  const { classes } = this.props;

    return (
      <div className={classes.root}>
          <Grid container spacing={4} className={classes.gridContainer} justify="center">
              {this.props.store.product.map((item) => {
                  return (
                      <ProductsItem key= {item.id} item={item}/>
                  );
              })} 
          </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductList));
