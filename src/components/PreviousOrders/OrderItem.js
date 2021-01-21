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

const theme = createMuiTheme();

const styles = {
  root: {
    // display: 'flex',
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
      // fontSize: '2em',
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
      fontSize: '1.1em',
    //   float: 'right',
      fontFamily: 'fantasy',
    //   fontWeight: 700,
    },
    subtext2: {
        paddingRight: '20px',
        fontSize: '1.2em',
      //   float: 'right',
        fontFamily: 'fantasy',
        fontWeight: 700,
      },
    right: {
        float: 'right',
    }
  }

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

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_PREVIOUS_ITEMS', payload: this.props.item.id});
    console.log('previous', this.props.item.id);
  }

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
                            {this.props.store.order.previousReducer.map(cart => 
                                cart.map(product => 
                                    product.order_id === this.props.item.id &&
                                    <ul>
                                        <div key={product.id} >
                                            <OrderCart product={product}/>
                                        </div>
                                    </ul>
                                )
                            )}
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
