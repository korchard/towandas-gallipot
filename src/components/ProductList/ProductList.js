import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductsItem from '../ProductsItem/ProductsItem';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
  },
  header: {
    margin: 'auto',
    width: '100%',
    radius: '5px',
    color: '#648b16',
    fontSize: '2em',
    fontFamily: 'fantasy',
    fontWeight: '700',
    textAlign: 'center',
    paddingRight: '20px',
  },
  paragraph: {
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'center',
  },
};

class ProductList extends Component {

  // // calls the GET route to display thee products
  // componentDidMount = () => {
  //   this.props.dispatch({ type: 'GET_PRODUCT' });
  // } // end componentDidMount

  render() {
  const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.header}>
            Products
        </Typography>
        <Typography variant="subtitle1" component="p" className={classes.paragraph}>
            Please feel free to contact me for requests of custom tinctures and formulations.
        </Typography>
        <Typography variant="subtitle1" component="p" className={classes.paragraph}>
            Single Herb Tincture - 1 oz - $20.00 <br></br>
            Single Herb Tincture - 2 oz - $35.00 <br></br>
            Multi-Herb Formulation - 1 oz - $35.00 <br></br>
            Multi-Herb Formulation - 2 oz - $65.00 <br></br>
        </Typography>
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
