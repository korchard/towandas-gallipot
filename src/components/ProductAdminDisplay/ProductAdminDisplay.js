import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductAdminForm from '../ProductAdminForm/ProductAdminForm';
import ProductList from '../ProductList/ProductList';

// STYLING
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  form: {
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
    paddingTop: '8%',
  },
}

class ProductAdminDisplay extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div >
        <Grid container justify="center">
          <Grid item xs={12} sm={4} className={classes.form}>
            <ProductAdminForm />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.header}>
                Products
            </Typography>
            <ProductList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductAdminDisplay);
