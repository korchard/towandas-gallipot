import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';

// const theme = createMuiTheme();

const styles = {
    // subtext: {
    //   paddingLeft: '20px',
    //   display: 'inline-block',
    //   paddingRight: '5px',
    //   fontSize: '1em',
    // },
    text: {
      fontFamily: 'fantasy',
      // fontWeight: '700',
      // display: 'inline-block',
      // paddingLeft: '5px',
      // fontSize: '1.1em',
    },
    // right: {
    //   float: 'right',
    //   paddingRight: '20px',
    //   fontSize: '1em',
    // },
    table: {
      minWidth: 650,
    },
  }
  
class OrderCart extends Component {

  render() {
    const { classes } = this.props;

        return (
          <>
                <TableCell variant="subtitle1" className={classes.text} align="left">
                    {this.props.product.name}
                </TableCell>
                <TableCell variant="subtitle1" className={classes.subtext} align="left">
                    {this.props.product.size}
                </TableCell>
                <TableCell variant="subtitle1" className={classes.subtext} align="left">
                    {this.props.product.quantity}
                </TableCell>
                <TableCell variant="subtitle1" className={classes.right} align="right">
                    ${this.props.product.sum}
                </TableCell>
          </>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrderCart));
