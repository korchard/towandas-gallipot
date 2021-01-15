import React, { Component } from 'react';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  paragraph: {
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'center',
  },
};

class ProductsText extends Component {

    render() {
    const { classes } = this.props;

        return (
            <div>
            <Typography variant="subtitle2" component="p" className={classes.paragraph}>
                    Please feel free to contact me for requests of custom tinctures and formulations.
                </Typography>
                <Typography variant="subtitle2" component="p" className={classes.paragraph}>
                    Single Herb Tincture - 1 oz - $20.00 <br></br>
                    Single Herb Tincture - 2 oz - $35.00 <br></br>
                    Multi-Herb Formulation - 1 oz - $35.00 <br></br>
                    Multi-Herb Formulation - 2 oz - $65.00 <br></br>
                    Bulk Custom Teas available - prices vary <br></br>
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(ProductsText);
