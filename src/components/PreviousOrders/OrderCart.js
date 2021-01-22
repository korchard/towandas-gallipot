import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const styles = {
    text: {
      fontFamily: 'fantasy',
      fontWeight: '700',
      fontSize: '1.1em',
    },
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
                <TableCell variant="subtitle1" align="left">
                    {this.props.product.size}
                </TableCell>
                <TableCell variant="subtitle1" align="left">
                    {this.props.product.quantity}
                </TableCell>
                <TableCell variant="subtitle1" align="right">
                    ${this.props.product.sum}
                </TableCell>
            </>
        );
    }
}

export default (withStyles(styles)(OrderCart));
