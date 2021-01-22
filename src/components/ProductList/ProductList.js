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

  // calls the GET route to display the products or the search route on refresh
  componentDidMount = () => {
    if (this.props.store.search?.[0] === undefined) {
      this.props.dispatch({ type: 'GET_PRODUCT' });
    } else {
      this.props.dispatch({ type: 'GET_SEARCH', payload: this.props.store.search.cookie });
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
