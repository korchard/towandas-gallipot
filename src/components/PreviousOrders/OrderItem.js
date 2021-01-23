import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Moment from 'react-moment';

// COMPONENTS
import OrderCart from './OrderCart';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const theme = createMuiTheme();

const styles = {
  root: {
    width: '100%',
    height: 'auto',
    marginBottom: '5%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
    header: {
      margin: 'auto',
      radius: '5px',
      fontFamily: 'fantasy',
      textAlign: 'left',
      paddingLeft: '20px',
      paddingTop: '1%',
      backgroundImage: 'linear-gradient(to right, #7fad14, #395208)',
      color: '#f8f8f8',
      paddingBottom: '1%',
    },
    subtext: {
      paddingRight: '20px',
      fontSize: '1em',
      fontFamily: 'fantasy',
      fontWeight: 700,
    },
    subtext2: {
        paddingRight: '20px',
        fontSize: '1.2em',
        fontFamily: 'fantasy',
        fontWeight: 700,
      },
    right: {
        float: 'right',
    },
    table: {
      minWidth: 320,
    },
    container: {
      paddingBottom: '3%',
    }
  }

  // responsiveness
  theme.typography.h5 = {
      fontFamily: [
        'fantasy',
        'serif',
      ].join(','),
      fontSize: '.8rem',
    '@media (min-width:600px)': {
      fontSize: '.8rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
  };

class OrderItem extends Component {

  // call to the the previous cart items associated with the specific order
  componentDidMount = () => {
    if (this.props.store.order.previousReducer.length === 0) {
      this.props.dispatch({ type: 'GET_PREVIOUS_ITEMS', payload: this.props.item.id});
    }
  } // end componentDidMount

  render() {
    const { classes } = this.props;

        return (
            <div>
                <Grid item xs={12} theme={theme}>
                    <Paper className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5" className={classes.header}>
                            <Moment format="MM/DD/YYYY">{this.props.item.order_date}</Moment>
                          </Typography>
                          <TableContainer className={classes.container}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="left">Product</TableCell>
                                  <TableCell align="left">Size</TableCell>
                                  <TableCell align="left">Quantity</TableCell>
                                  <TableCell align="right">Subtotal</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                            {this.props.store.order.previousReducer.map(cart => 
                                cart.map(product =>
                                  product.order_id === this.props.item.id &&
                                        <TableRow key={product.id} >
                                            <OrderCart product={product}/>
                                        </TableRow> 
                                )
                            )}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <div className={classes.right}>
                            <Typography variant="subtitle2" className={classes.subtext}>
                              Shipping - ${this.props.item.shipping_cost}
                            </Typography>
                                  <br></br>
                            <Typography variant="subtitle1" className={classes.subtext2}>
                              Total - ${this.props.item.total_cost}
                            </Typography>
                          </div>
                        </CardContent>
                      </div>
                    </Paper>
                </Grid>
            </div>
        );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrderItem));
