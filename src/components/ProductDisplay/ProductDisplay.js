import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductsText from '../ProductsItem/ProductsText';

// STYLING
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  search: {
    width: '90%',
  },
  header: {
    width: '100%',
    radius: '5px',
    color: '#648b16',
    fontSize: '2em',
    fontFamily: 'fantasy',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: '15px',
  },
}

class ProductDisplay extends Component {

  // calls cart items to display in navbar
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
  } // end componentDidMount

  render() {
    const { classes } = this.props;

    return (
      <div >
        <Grid container className={classes.gridContainer} justify="center">
          <Grid item xs={12} className={classes.search}>
            <ProductSearch />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.header}>
                Products
            </Typography>
                <ProductsText />
                <ProductList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(ProductDisplay));
