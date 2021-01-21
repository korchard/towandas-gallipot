import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// const theme = createMuiTheme();

const styles = {
    subtext: {
      paddingLeft: '20px',
      display: 'inline-block',
      paddingRight: '5px',
      fontSize: '1em',
    },
    text: {
      fontFamily: 'fantasy',
      fontWeight: '700',
      display: 'inline-block',
      paddingLeft: '5px',
      fontSize: '1.1em',
    },
    right: {
      float: 'right',
      paddingRight: '20px',
      fontSize: '1em',
    }
  }
  
class OrderCart extends Component {

  render() {
    const { classes } = this.props;

        return (
            <div>
              <li>
                <Typography variant="subtitle1" className={classes.text}>
                    {this.props.product.name}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtext}>
                    {this.props.product.size}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtext}>
                    quantity - {this.props.product.quantity}
                </Typography>
                <Typography variant="subtitle1" className={classes.right}>
                    total - ${this.props.product.sum}
                </Typography>
              </li>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrderCart));
