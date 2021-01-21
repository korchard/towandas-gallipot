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
      paddingTop: '2%',
    },
  }
  
class OrderCart extends Component {

  render() {
    const { classes } = this.props;

        return (
            <div>
                <Typography variant="subtitle1" className={classes.subtext}>
                    {this.props.product.name}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtext}>
                    {this.props.product.size}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtext}>
                    quantity - {this.props.product.quantity}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtext}>
                    total - ${this.props.product.sum}
                </Typography>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrderCart));
