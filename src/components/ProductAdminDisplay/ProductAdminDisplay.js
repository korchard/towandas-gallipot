import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// COMPONENTS
import ProductAdminForm from '../ProductAdminForm/ProductAdminForm';
import ProductList from '../ProductList/ProductList';

// STYLING
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// // calls the theme
// const theme = createMuiTheme();

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

// theme.typography.h5 = {
//   fontSize: '1rem',
//   '@media (min-width:600px)': {
//     fontSize: '1rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };

class ProductAdminDisplay extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div >
        {/* <ThemeProvider theme={theme}> */}
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
        {/* </ThemeProvider> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductAdminDisplay));
