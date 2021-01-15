import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';

// STYLING
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  search: {
    width: '90%',
  },
}

class ProductDisplay extends Component {

//   // calld the GET route to render products
//   componentDidMount = () => {
//     this.props.dispatch({ type: 'GET_PRODUCT' }); 
//   } // end componentDidMount

  render() {
    const { classes } = this.props;

    return (
      <div >
        <Grid container className={classes.gridContainer} justify="center">
          <Grid item xs={12} className={classes.search}>
            <ProductSearch />
          </Grid>
          <Grid item xs={12}>
            <ProductList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductDisplay));
