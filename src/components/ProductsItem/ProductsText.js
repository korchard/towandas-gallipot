import React, { Component } from 'react';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
  paragraph: {
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'center',
  },
};
  
  theme.typography.subtitle2 = {
    fontSize: '.5rem',
    '@media (min-width:600px)': {
      fontSize: '.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.875rem',
    },
  };

class ProductsText extends Component {

    render() {
    const { classes } = this.props;

        return (
            <div>
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(ProductsText);
